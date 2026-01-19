"use client";

import { useState, useMemo } from "react";
import SummaryCard from "@/components/dashboard/SummaryCard";
import Pagination from "@/components/dashboard/Pagination";
import Image from "next/image";

interface Course {
  id: string;
  title: string;
  facilitator: string;
  numberOfStudents: number;
  status: "Active" | "Draft";
}

export default function AdminCoursesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Draft">("All");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showBulkActions, setShowBulkActions] = useState(false);

  // Sample course data - stored in state to make it dynamic
  const [courses, setCourses] = useState<Course[]>([
    { id: "1", title: "Introduction to Design T...", facilitator: "John Johnson", numberOfStudents: 20, status: "Active" },
    { id: "2", title: "Introduction to Design T...", facilitator: "John Johnson", numberOfStudents: 20, status: "Draft" },
    { id: "3", title: "Introduction to Design T...", facilitator: "John Johnson", numberOfStudents: 20, status: "Active" },
    { id: "4", title: "Introduction to Design T...", facilitator: "John Johnson", numberOfStudents: 20, status: "Draft" },
    { id: "5", title: "Introduction to Design T...", facilitator: "John Johnson", numberOfStudents: 20, status: "Active" },
    { id: "6", title: "Introduction to Design T...", facilitator: "John Johnson", numberOfStudents: 20, status: "Draft" },
    { id: "7", title: "Introduction to Design T...", facilitator: "John Johnson", numberOfStudents: 20, status: "Active" },
  ]);

  // Filter and search courses
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        searchQuery === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.facilitator.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || course.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [courses, searchQuery, statusFilter]);

  // Calculate summary statistics dynamically
  const summaryStats = useMemo(() => {
    const available = courses.length;
    const active = courses.filter((c) => c.status === "Active").length;
    const draft = courses.filter((c) => c.status === "Draft").length;
    const totalStudents = courses.reduce((sum, course) => sum + course.numberOfStudents, 0);

    return { available, active, draft, totalStudents };
  }, [courses]);

  // Pagination
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCourses = filteredCourses.slice(startIndex, startIndex + itemsPerPage);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedCourses(paginatedCourses.map((c) => c.id));
    } else {
      setSelectedCourses([]);
    }
  };

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handlePublish = (courseId: string) => {
    // Update course status to Active
    setCourses((prev) =>
      prev.map((course) =>
        course.id === courseId ? { ...course, status: "Active" } : course
      )
    );
    setSelectedCourses((prev) => prev.filter((id) => id !== courseId));
  };

  const handleDelete = (courseId: string) => {
    // Remove course from list
    setCourses((prev) => prev.filter((course) => course.id !== courseId));
    setSelectedCourses((prev) => prev.filter((id) => id !== courseId));
  };

  const handleEdit = (courseId: string) => {
    // Handle edit action - navigate to edit page or open modal
    console.log("Edit course:", courseId);
  };

  // Reset to page 1 when filter/search changes
  const handleFilterChange = (filter: "All" | "Active" | "Draft") => {
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
          title="Courses"
          value={summaryStats.available}
          status="Available"
          bgColor="bg-[#FFFFFF]"
          iconBgColor="bg-[#D6F2ED]"
          icon={
            <Image src="/icons/courseIcon.svg" alt="Available" width={32} height={32} />
          }
        />
        <SummaryCard
          title="Courses"
          value={summaryStats.active}
          status="Active"
          bgColor="bg-[#FFFFFF]"
          iconBgColor="bg-[#D6F2ED]"
          icon={
            <Image src="/icons/courseIcon.svg" alt="Active" width={32} height={32} />
          }
        />
        <SummaryCard
          title="Courses"
          value={summaryStats.draft}
          status="Draft"
          bgColor="bg-[#FFFFFF]"
          iconBgColor="bg-[#D6F2ED]"
          icon={
            <Image src="/icons/courseIcon.svg" alt="Draft" width={32} height={32} />
          }
        />
        <SummaryCard
          title="Students"
          value={summaryStats.totalStudents}
          status="Enrolled"
          bgColor="bg-[#FFFFFF]"
          iconBgColor="bg-[#FFF4DF]"
          icon={
            <Image src="/icons/pathIcon.svg" alt="Enrolled" width={32} height={32} />
          }
        />
      </div>

      {/* Courses List Section */}
      <div className="rounded-2xl bg-white p-6">
        {/* Section Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Courses</h2>
          <div className="flex gap-3">
            {/* Add New Course Button */}
            <button className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600">
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add new course
            </button>
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
                    All Courses
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
                    onClick={() => handleFilterChange("Draft")}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors rounded-b-lg ${
                      statusFilter === "Draft"
                        ? "bg-orange-50 text-orange-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Draft
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Courses Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={
                        paginatedCourses.length > 0 &&
                        paginatedCourses.every((c) => selectedCourses.includes(c.id))
                      }
                      onChange={handleSelectAll}
                      className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                    {selectedCourses.length > 0 && (
                      <button
                        onClick={() => setShowBulkActions(!showBulkActions)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg
                          className="h-4 w-4"
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
                    )}
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Course Title</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Course Facilitator</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">No. of Students</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedCourses.length > 0 ? (
                paginatedCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        checked={selectedCourses.includes(course.id)}
                        onChange={() => handleSelectCourse(course.id)}
                        className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                    </td>
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">{course.title}</td>
                    <td className="px-4 py-4 text-sm text-gray-600">{course.facilitator}</td>
                    <td className="px-4 py-4 text-sm text-gray-600">{course.numberOfStudents}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                          course.status === "Active"
                            ? "bg-green-30 text-green-30"
                            : "bg-[#FA85001A] text-[#FA8500]"
                        }`}
                      >
                        {course.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(course.id)}
                          className="rounded-lg p-2 text-blue-600 cursor-pointer hover:bg-blue-50 transition-colors"
                          aria-label="Edit course"
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
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        {course.status === "Active" ? (
                          <button
                            onClick={() => handleDelete(course.id)}
                            className="rounded-lg p-2 text-red-600 cursor-pointer hover:bg-red-50 transition-colors"
                            aria-label="Delete course"
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
                          <button
                            onClick={() => handlePublish(course.id)}
                            className="rounded-lg p-2 text-green-600 cursor-pointer hover:bg-green-50 transition-colors"
                            aria-label="Publish course"
                          >
                            <Image src="/icons/sent.svg" alt="Publish" width={20} height={20} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-sm text-gray-500">
                    No courses found matching your search criteria.
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
