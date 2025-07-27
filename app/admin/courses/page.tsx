import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function CoursesPage() {
    return (
        <>
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Courses</h1>
            <Link href="/admin/courses/create" className={buttonVariants()}>
                Create Course
            </Link>
        </div>
        <div>
            {/* Placeholder for course list or management features */}
            <p className="mt-4">Here you can manage your courses.</p>
        </div>
        </>
    );
}