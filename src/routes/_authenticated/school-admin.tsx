import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { School, Users, GraduationCap, DollarSign, Upload, Trash2, Loader2, ShieldAlert, ChartBar, CheckCircle2 } from "lucide-react";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  getMySchoolAdmin,
  listSchoolStudents,
  listRoster,
  bulkAddRoster,
  removeRosterEntry,
  verifySchoolPayment,
  getSchoolClassAnalytics,
} from "@/lib/school.functions";

export const Route = createFileRoute("/_authenticated/school-admin")({
  head: () => ({ meta: [{ title: "School Admin | Edusanna" }] }),
  component: SchoolAdminPage,
});

function SchoolAdminPage() {
  const fetchMe = useServerFn(getMySchoolAdmin);
  const { data, isLoading } = useQuery({ queryKey: ["my-school-admin"], queryFn: () => fetchMe() });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!data?.schoolAdmin) {
    return (
      <div className="min-h-screen">
        <SiteNavbar />
        <section className="pt-40 pb-20 px-4 text-center max-w-md mx-auto">
          <ShieldAlert className="w-14 h-14 text-red-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-blue-900 mb-2">Access denied</h1>
          <p className="text-blue-600 mb-6">You are not registered as a school administrator.</p>
          <Link to="/dashboard"><Button className="premium-button">Back to dashboard</Button></Link>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return <Content schoolName={data.schoolAdmin.school_name as string} contactName={data.schoolAdmin.contact_name as string | null} />;
}

function Content({ schoolName, contactName }: { schoolName: string; contactName: string | null }) {
  return (
    <div className="min-h-screen">
      <SiteNavbar />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
              <School className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-blue-900 leading-tight">{schoolName}</h1>
              <p className="text-blue-600 text-sm">School admin dashboard{contactName ? ` - ${contactName}` : ""}</p>
            </div>
          </div>

          <Tabs defaultValue="analytics" className="mt-8">
            <TabsList className="mb-6 flex-wrap h-auto">
              <TabsTrigger value="analytics"><ChartBar className="w-4 h-4 mr-1.5" />Analytics</TabsTrigger>
              <TabsTrigger value="students"><Users className="w-4 h-4 mr-1.5" />Students</TabsTrigger>
              <TabsTrigger value="payments"><DollarSign className="w-4 h-4 mr-1.5" />Verify payment</TabsTrigger>
              <TabsTrigger value="roster"><Upload className="w-4 h-4 mr-1.5" />Roster</TabsTrigger>
            </TabsList>
            <TabsContent value="analytics"><AnalyticsTab /></TabsContent>
            <TabsContent value="students"><StudentsTab /></TabsContent>
            <TabsContent value="payments"><VerifyPaymentTab /></TabsContent>
            <TabsContent value="roster"><RosterTab /></TabsContent>
          </Tabs>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

/* --------------------------------- Analytics -------------------------------- */

function AnalyticsTab() {
  const fetchAnalytics = useServerFn(getSchoolClassAnalytics);
  const { data, isLoading } = useQuery({ queryKey: ["school-analytics"], queryFn: () => fetchAnalytics() });

  if (isLoading) return <p className="text-blue-500 py-8">Loading analytics…</p>;
  const classes = data?.classes ?? [];
  const totals = data?.totals;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<Users className="w-5 h-5" />} label="Students" value={totals?.students ?? 0} />
        <StatCard icon={<GraduationCap className="w-5 h-5" />} label="Completed courses" value={totals?.coursesCompleted ?? 0} />
        <StatCard icon={<CheckCircle2 className="w-5 h-5" />} label="Credentials paid" value={(totals?.certificatesPaid ?? 0) + (totals?.diplomasPaid ?? 0)} />
        <StatCard icon={<DollarSign className="w-5 h-5" />} label="Revenue" value={`$${(totals?.revenue ?? 0).toFixed(2)}`} />
      </div>

      <div className="glass-card-light p-2 sm:p-4 overflow-x-auto">
        <h3 className="font-bold text-blue-900 px-2 pt-2">Performance by class</h3>
        {classes.length === 0 ? (
          <p className="text-blue-600 px-2 py-6">No data yet. Upload your roster and invite students to register.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Class</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Courses started</TableHead>
                <TableHead>Completed</TableHead>
                <TableHead>Completion %</TableHead>
                <TableHead>Cert / Dip paid</TableHead>
                <TableHead>Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classes.map((c) => {
                const pct = c.coursesStarted ? Math.round((c.coursesCompleted / c.coursesStarted) * 100) : 0;
                return (
                  <TableRow key={c.className}>
                    <TableCell className="font-medium text-blue-900">{c.className}</TableCell>
                    <TableCell>{c.students}</TableCell>
                    <TableCell>{c.coursesStarted}</TableCell>
                    <TableCell>{c.coursesCompleted}</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-700 border-0">{pct}%</Badge>
                    </TableCell>
                    <TableCell>{c.certificatesPaid} / {c.diplomasPaid}</TableCell>
                    <TableCell className="font-semibold text-blue-900">${c.revenue.toFixed(2)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}

/* --------------------------------- Students --------------------------------- */

function StudentsTab() {
  const fetchStudents = useServerFn(listSchoolStudents);
  const { data, isLoading } = useQuery({ queryKey: ["school-students"], queryFn: () => fetchStudents() });

  if (isLoading) return <p className="text-blue-500 py-8">Loading students…</p>;
  const students = data?.students ?? [];
  const unmatched = data?.unmatched ?? [];

  return (
    <div className="space-y-6">
      <div className="glass-card-light p-2 sm:p-4 overflow-x-auto">
        <h3 className="font-bold text-blue-900 px-2 pt-2">Registered students ({students.length})</h3>
        {students.length === 0 ? (
          <p className="text-blue-600 px-2 py-6">No students from your school have registered yet.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Started</TableHead>
                <TableHead>Completed</TableHead>
                <TableHead>Paid</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((s) => (
                <TableRow key={s.id}>
                  <TableCell className="font-medium text-blue-900">{s.fullName}</TableCell>
                  <TableCell>{s.className ?? <span className="text-amber-600 text-xs">Unassigned</span>}</TableCell>
                  <TableCell className="text-xs text-blue-500">{s.email}</TableCell>
                  <TableCell>{s.coursesStarted}</TableCell>
                  <TableCell>{s.coursesCompleted}</TableCell>
                  <TableCell className="font-semibold">${s.totalPaid.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {unmatched.length > 0 && (
        <div className="glass-card-light p-4">
          <h3 className="font-bold text-blue-900 mb-2">Roster entries not yet signed up ({unmatched.length})</h3>
          <p className="text-sm text-blue-600 mb-3">These students are on your roster but have not yet created an Edusanna account.</p>
          <div className="flex flex-wrap gap-2">
            {unmatched.slice(0, 50).map((u, i) => (
              <span key={i} className="text-xs bg-amber-50 border border-amber-200 text-amber-800 rounded-full px-2.5 py-1">
                {u.fullName}{u.className ? ` (${u.className})` : ""}
              </span>
            ))}
            {unmatched.length > 50 && <span className="text-xs text-blue-500">+ {unmatched.length - 50} more</span>}
          </div>
        </div>
      )}
    </div>
  );
}

/* --------------------------------- Verify payment --------------------------- */

function VerifyPaymentTab() {
  const qc = useQueryClient();
  const fetchStudents = useServerFn(listSchoolStudents);
  const verify = useServerFn(verifySchoolPayment);
  const { data } = useQuery({ queryKey: ["school-students"], queryFn: () => fetchStudents() });
  const students = data?.students ?? [];

  const [studentId, setStudentId] = useState("");
  const [courseSelection, setCourseSelection] = useState<string>("");
  const [courseName, setCourseName] = useState("");
  const [courseId, setCourseId] = useState("");
  const [level, setLevel] = useState<"certificate" | "diploma">("certificate");
  const [manual, setManual] = useState(false);

  const student = students.find((s) => s.id === studentId);
  const studentCourses = useMemo(() => {
    const ids = new Set<string>();
    const list: { courseId: string; courseName: string; level: "certificate" | "diploma" }[] = [];
    // Inferred from payments + manual entries: use any payments student has started
    // Falls back to manual entry.
    return list;
  }, []);

  const amount = level === "diploma" ? 18 : 12;

  const mutation = useMutation({
    mutationFn: () =>
      verify({
        data: {
          studentId,
          courseId: courseId || courseName.toLowerCase().replace(/\s+/g, "-"),
          courseName,
          level,
          amount,
        },
      }),
    onSuccess: (res) => {
      if ((res as any)?.success === false) {
        toast.error((res as any).error ?? "Could not verify payment");
        return;
      }
      toast.success("Payment verified - admin notified on Telegram");
      qc.invalidateQueries({ queryKey: ["school-students"] });
      qc.invalidateQueries({ queryKey: ["school-analytics"] });
      setStudentId(""); setCourseId(""); setCourseName(""); setLevel("certificate"); setManual(false); setCourseSelection("");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Failed"),
  });

  return (
    <div className="glass-card-light p-5 max-w-2xl space-y-4">
      <div>
        <h3 className="font-bold text-blue-900">Verify a cash payment</h3>
        <p className="text-sm text-blue-600">
          A student paid you at school reception. Verify it here to issue their credential and notify Edusanna admin instantly.
        </p>
      </div>

      <div>
        <Label>Student</Label>
        <Select value={studentId} onValueChange={(v) => { setStudentId(v); setCourseSelection(""); setCourseId(""); setCourseName(""); }}>
          <SelectTrigger className="h-10"><SelectValue placeholder="Pick a student from your school" /></SelectTrigger>
          <SelectContent>
            {students.map((s) => (
              <SelectItem key={s.id} value={s.id}>
                {s.fullName} {s.className ? `(${s.className})` : ""} - {s.email}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {studentId && (
        <>
          {student && student.payments.length > 0 && !manual && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <Label>Existing course on file</Label>
                <button type="button" onClick={() => setManual(true)} className="text-xs text-blue-600 hover:underline">
                  Enter manually instead
                </button>
              </div>
              <Select
                value={courseSelection}
                onValueChange={(v) => {
                  setCourseSelection(v);
                  const p = student.payments.find((x) => `${x.course_id}::${x.certificate_type}` === v);
                  if (p) {
                    setCourseId(p.course_id);
                    setCourseName(p.course_name ?? p.course_id);
                    setLevel(p.certificate_type === "diploma" ? "diploma" : "certificate");
                  }
                }}
              >
                <SelectTrigger className="h-10"><SelectValue placeholder="Pick a course they previously paid" /></SelectTrigger>
                <SelectContent>
                  {student.payments.map((p) => {
                    const key = `${p.course_id}::${p.certificate_type}`;
                    return (
                      <SelectItem key={p.id} value={key}>
                        {p.course_name ?? p.course_id} - {p.certificate_type}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          )}

          {(manual || !student || student.payments.length === 0) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Label htmlFor="cn">Course name</Label>
                <Input id="cn" value={courseName} onChange={(e) => setCourseName(e.target.value)} placeholder="Data Science Fundamentals" />
              </div>
              <div>
                <Label>Level</Label>
                <Select value={level} onValueChange={(v) => setLevel(v as "certificate" | "diploma")}>
                  <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="certificate">Certificate ($12)</SelectItem>
                    <SelectItem value="diploma">Diploma ($18)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {courseName && (
            <div className="rounded-md bg-blue-50 px-3 py-2 text-sm text-blue-800">
              Verifying <strong>{courseName}</strong> ({level}) - <strong>${amount}</strong> for <strong>{student?.fullName}</strong>
            </div>
          )}
        </>
      )}

      <div className="flex gap-3">
        <Button
          onClick={() => mutation.mutate()}
          disabled={mutation.isPending || !studentId || !courseName}
          className="premium-button"
        >
          {mutation.isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          Verify
        </Button>
      </div>
    </div>
  );
}

/* ----------------------------------- Roster --------------------------------- */

function RosterTab() {
  const qc = useQueryClient();
  const fetchRoster = useServerFn(listRoster);
  const bulk = useServerFn(bulkAddRoster);
  const remove = useServerFn(removeRosterEntry);
  const { data, isLoading } = useQuery({ queryKey: ["school-roster"], queryFn: () => fetchRoster() });
  const roster = data?.roster ?? [];

  const [paste, setPaste] = useState("");
  const upload = useMutation({
    mutationFn: () => {
      const entries = paste
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
          // "Full Name, Class" or "Full Name"
          const [name, klass] = line.split(/[,;\t]/).map((s) => s.trim());
          return { fullName: name, className: klass || undefined };
        });
      return bulk({ data: { entries } });
    },
    onSuccess: (res) => {
      toast.success(`${(res as any).added ?? 0} students added`);
      setPaste("");
      qc.invalidateQueries({ queryKey: ["school-roster"] });
      qc.invalidateQueries({ queryKey: ["school-students"] });
      qc.invalidateQueries({ queryKey: ["school-analytics"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Upload failed"),
  });

  const rm = useMutation({
    mutationFn: (id: string) => remove({ data: { id } }),
    onSuccess: () => {
      toast.success("Removed");
      qc.invalidateQueries({ queryKey: ["school-roster"] });
    },
  });

  return (
    <div className="space-y-6">
      <div className="glass-card-light p-5 space-y-3">
        <h3 className="font-bold text-blue-900">Bulk upload your class roster</h3>
        <p className="text-sm text-blue-600">
          Paste one student per line. Format: <code className="bg-blue-50 px-1 rounded">Full Name, Class</code>. Class is optional. Up to 1000 per upload.
        </p>
        <Textarea
          value={paste}
          onChange={(e) => setPaste(e.target.value)}
          rows={8}
          placeholder={"Tariro Moyo, Form 5A\nBongani Khumalo, Form 5A\nChipo Ndlovu, Form 6B"}
        />
        <Button onClick={() => upload.mutate()} disabled={upload.isPending || !paste.trim()} className="premium-button">
          {upload.isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          Upload roster
        </Button>
      </div>

      <div className="glass-card-light p-2 sm:p-4 overflow-x-auto">
        {isLoading ? (
          <p className="text-blue-500 p-4">Loading roster…</p>
        ) : roster.length === 0 ? (
          <p className="text-blue-600 p-6 text-center">No roster entries yet.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow><TableHead>Name</TableHead><TableHead>Class</TableHead><TableHead></TableHead></TableRow>
            </TableHeader>
            <TableBody>
              {roster.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium text-blue-900">{r.full_name}</TableCell>
                  <TableCell>{r.class_name ?? "-"}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" onClick={() => rm.mutate(r.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="glass-card-light p-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 flex items-center justify-center flex-shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="text-xl font-black text-blue-900 truncate">{value}</div>
        <div className="text-xs text-blue-600">{label}</div>
      </div>
    </div>
  );
}
