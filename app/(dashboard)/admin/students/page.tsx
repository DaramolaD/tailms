"use client";

import { useState, useMemo } from "react";
import SummaryCard from "@/components/dashboard/SummaryCard";
import Pagination from "@/components/dashboard/Pagination";
import Image from "next/image";

interface Student {
  id: string;
  name: string;
  age: number;
  studentId: string;
  enrolledCourses: string;
  status: "Active" | "Pending";
}

export default function AdminStudentsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Pending">("All");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Sample student data - stored in state to make it dynamic
  const [students, setStudents] = useState<Student[]>([
    { id: "1", name: "John Johnson", age: 20, studentId: "SD00125", enrolledCourses: "Introduction to Design T...", status: "Active" },
    { id: "2", name: "John Johnson", age: 20, studentId: "SD00225", enrolledCourses: "Introduction to Design T...", status: "Active" },
    { id: "3", name: "John Johnson", age: 20, studentId: "SD00325", enrolledCourses: "None", status: "Pending" },
    { id: "4", name: "John Johnson", age: 20, studentId: "SD00425", enrolledCourses: "Introduction to Design T...", status: "Active" },
    { id: "5", name: "John Johnson", age: 20, studentId: "SD00525", enrolledCourses: "None", status: "Pending" },
    { id: "6", name: "John Johnson", age: 20, studentId: "SD00625", enrolledCourses: "Introduction to Design T...", status: "Active" },
    { id: "7", name: "John Johnson", age: 20, studentId: "SD00725", enrolledCourses: "Introduction to Design T...", status: "Active" },
  ]);

  // Filter and search students
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        searchQuery === "" ||
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.enrolledCourses.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || student.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [students, searchQuery, statusFilter]);

  // Calculate summary statistics dynamically
  const summaryStats = useMemo(() => {
    const enrolled = students.length;
    const active = students.filter((s) => s.status === "Active").length;
    const completedCourses = students.filter((s) => s.enrolledCourses !== "None").length;
    const totalCourses = students.length;
    const quizScore = totalCourses > 0 ? Math.round((completedCourses / totalCourses) * 100) : 0;

    return { enrolled, active, completedCourses, quizScore };
  }, [students]);

  // Pagination
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedStudents = filteredStudents.slice(startIndex, startIndex + itemsPerPage);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedStudents(paginatedStudents.map((s) => s.id));
    } else {
      setSelectedStudents([]);
    }
  };

  const handleSelectStudent = (studentId: string) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleApprove = (studentId: string) => {
    // Update student status to Active
    setStudents((prev) =>
      prev.map((student) =>
        student.id === studentId ? { ...student, status: "Active" } : student
      )
    );
    // Remove from selected if it was selected
    setSelectedStudents((prev) => prev.filter((id) => id !== studentId));
  };

  const handleReject = (studentId: string) => {
    // Remove student from list
    setStudents((prev) => prev.filter((student) => student.id !== studentId));
    setSelectedStudents((prev) => prev.filter((id) => id !== studentId));
  };

  const handleDelete = (studentId: string) => {
    // Remove student from list
    setStudents((prev) => prev.filter((student) => student.id !== studentId));
    setSelectedStudents((prev) => prev.filter((id) => id !== studentId));
  };

  // Reset to page 1 when filter/search changes
  const handleFilterChange = (filter: "All" | "Active" | "Pending") => {
    setStatusFilter(filter);
    setCurrentPage(1);
    setShowFilterDropdown(false);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div>
      {/* Summary Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          title="Students Enrolled"
          value={summaryStats.enrolled}
          bgColor="bg-[#FFFFFF]"
          iconBgColor="bg-[#FFF4DF]"
          icon={
            <Image src="/icons/pathIcon.svg" alt="Enrolled" width={32} height={32} />
          }
        />
        <SummaryCard
          title="Students Active"
          value={summaryStats.active}
          bgColor="bg-[#FFFFFF]"
          iconBgColor="bg-[#FFF4DF]"
          icon={
            <Image src="/icons/pathIcon.svg" alt="Active" width={32} height={32} />
          }
        />
        <SummaryCard
          title="Courses Completed"
          value={summaryStats.completedCourses}
          bgColor="bg-[#FFFFFF]"
          iconBgColor="bg-[#D6F2ED]"
          icon={
            <Image src="/icons/checkSquare.svg" alt="Completed" width={32} height={32} />
          }
        />
        <SummaryCard
          title="Quiz Score"
          value={`${summaryStats.quizScore}%`}
          bgColor="bg-[#FFFFFF]"
          iconBgColor="bg-[#D4EDFF]"
          icon={
            <Image src="/icons/medalIcon.svg" alt="Quiz Score" width={32} height={32} />
          }
        />
      </div>

      {/* Students List Section */}
      <div className="rounded-2xl bg-white p-6">
        {/* Section Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Students</h2>
          <div className="flex gap-3">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by name, ID,..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>
            {/* Filter Button */}
            <div className="relative">
              <button
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
                Filter
                <svg
                  className={`h-4 w-4 transition-transform ${showFilterDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Filter Dropdown */}
              {showFilterDropdown && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg z-10">
                  <button
                    onClick={() => handleFilterChange("All")}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      statusFilter === "All"
                        ? "bg-orange-50 text-orange-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    All Students
                  </button>
                  <button
                    onClick={() => handleFilterChange("Active")}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      statusFilter === "Active"
                        ? "bg-orange-50 text-orange-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Active
                  </button>
                  <button
                    onClick={() => handleFilterChange("Pending")}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors rounded-b-lg ${
                      statusFilter === "Pending"
                        ? "bg-orange-50 text-orange-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Pending
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Students Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={
                      paginatedStudents.length > 0 &&
                      paginatedStudents.every((s) => selectedStudents.includes(s.id))
                    }
                    onChange={handleSelectAll}
                    className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Student Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Age</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Student ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Enrolled Courses</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedStudents.length > 0 ? (
                paginatedStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(student.id)}
                      onChange={() => handleSelectStudent(student.id)}
                      className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{student.name}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{student.age}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{student.studentId}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{student.enrolledCourses}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${student.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-orange-100 text-orange-800"
                        }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      {student.status === "Active" ? (
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="rounded-lg p-2 text-red-600 hover:bg-red-50 transition-colors"
                          aria-label="Delete student"
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={() => handleApprove(student.id)}
                            className="rounded-lg p-2 text-green-600 hover:bg-green-50 transition-colors"
                            aria-label="Approve student"
                          >
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleReject(student.id)}
                            className="rounded-lg p-2 text-red-600 hover:bg-red-50 transition-colors"
                            aria-label="Reject student"
                          >
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-sm text-gray-500">
                    No students found matching your search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}
