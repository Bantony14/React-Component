import { UserSearch } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ToggleTheme.js";

function DataTables() {
  type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    city: string;
    role: string;
    salary: number;
    status: "Active" | "Inactive";
  };

  const usersData: User[] = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      age: 24,
      city: "Surat",
      role: "Frontend Developer",
      salary: 55000,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
      age: 26,
      city: "Ahmedabad",
      role: "Backend Developer",
      salary: 42000,
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      age: 23,
      city: "Mumbai",
      role: "UI Designer",
      salary: 30000,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Neha Shah",
      email: "neha@gmail.com",
      age: 27,
      city: "Vadodara",
      role: "Full Stack Developer",
      salary: 55000,
      status: "Active",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      age: 29,
      city: "Pune",
      role: "Backend Developer",
      salary: 48000,
      status: "Active",
    },
    {
      id: 6,
      name: "Karan Joshi",
      email: "karan@gmail.com",
      age: 25,
      city: "Surat",
      role: "Frontend Developer",
      salary: 38000,
      status: "Inactive",
    },
    {
      id: 7,
      name: "Sneha Desai",
      email: "sneha@gmail.com",
      age: 28,
      city: "Ahmedabad",
      role: "HR Manager",
      salary: 45000,
      status: "Active",
    },
    {
      id: 8,
      name: "Vivek Singh",
      email: "vivek@gmail.com",
      age: 31,
      city: "Delhi",
      role: "Full Stack Developer",
      salary: 65000,
      status: "Active",
    },
    {
      id: 9,
      name: "Anjali Shah",
      email: "anjali@gmail.com",
      age: 24,
      city: "Mumbai",
      role: "Frontend Developer",
      salary: 36000,
      status: "Inactive",
    },
    {
      id: 10,
      name: "Arjun Patel",
      email: "arjun@gmail.com",
      age: 30,
      city: "Surat",
      role: "Backend Developer",
      salary: 52000,
      status: "Active",
    },
    {
      id: 11,
      name: "Mehul Joshi",
      email: "mehul@gmail.com",
      age: 26,
      city: "Rajkot",
      role: "UI Designer",
      salary: 32000,
      status: "Active",
    },
    {
      id: 12,
      name: "Pooja Mehta",
      email: "pooja@gmail.com",
      age: 25,
      city: "Pune",
      role: "Frontend Developer",
      salary: 40000,
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      age: 24,
      city: "Surat",
      role: "Frontend Developer",
      salary: 45000,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
      age: 26,
      city: "Ahmedabad",
      role: "Backend Developer",
      salary: 42000,
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      age: 23,
      city: "Mumbai",
      role: "UI Designer",
      salary: 30000,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Neha Shah",
      email: "neha@gmail.com",
      age: 27,
      city: "Vadodara",
      role: "Full Stack Developer",
      salary: 55000,
      status: "Active",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      age: 29,
      city: "Pune",
      role: "Backend Developer",
      salary: 48000,
      status: "Active",
    },
    {
      id: 6,
      name: "Karan Joshi",
      email: "karan@gmail.com",
      age: 25,
      city: "Surat",
      role: "Frontend Developer",
      salary: 38000,
      status: "Inactive",
    },
    {
      id: 7,
      name: "Sneha Desai",
      email: "sneha@gmail.com",
      age: 28,
      city: "Ahmedabad",
      role: "HR Manager",
      salary: 45000,
      status: "Active",
    },
    {
      id: 8,
      name: "Vivek Singh",
      email: "vivek@gmail.com",
      age: 31,
      city: "Delhi",
      role: "Full Stack Developer",
      salary: 65000,
      status: "Active",
    },
    {
      id: 9,
      name: "Anjali Shah",
      email: "anjali@gmail.com",
      age: 24,
      city: "Mumbai",
      role: "Frontend Developer",
      salary: 36000,
      status: "Inactive",
    },
    {
      id: 10,
      name: "Arjun Patel",
      email: "arjun@gmail.com",
      age: 30,
      city: "Surat",
      role: "Backend Developer",
      salary: 52000,
      status: "Active",
    },
    {
      id: 11,
      name: "Mehul Joshi",
      email: "mehul@gmail.com",
      age: 26,
      city: "Rajkot",
      role: "UI Designer",
      salary: 32000,
      status: "Active",
    },
    {
      id: 12,
      name: "Pooja Mehta",
      email: "pooja@gmail.com",
      age: 25,
      city: "Pune",
      role: "Frontend Developer",
      salary: 40000,
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      age: 24,
      city: "Surat",
      role: "Frontend Developer",
      salary: 35000,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
      age: 26,
      city: "Ahmedabad",
      role: "Backend Developer",
      salary: 42000,
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      age: 23,
      city: "Mumbai",
      role: "UI Designer",
      salary: 30000,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Neha Shah",
      email: "neha@gmail.com",
      age: 27,
      city: "Vadodara",
      role: "Full Stack Developer",
      salary: 55000,
      status: "Active",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      age: 29,
      city: "Pune",
      role: "Backend Developer",
      salary: 48000,
      status: "Active",
    },
    {
      id: 6,
      name: "Karan Joshi",
      email: "karan@gmail.com",
      age: 25,
      city: "Surat",
      role: "Frontend Developer",
      salary: 38000,
      status: "Inactive",
    },
    {
      id: 7,
      name: "Sneha Desai",
      email: "sneha@gmail.com",
      age: 28,
      city: "Ahmedabad",
      role: "HR Manager",
      salary: 45000,
      status: "Active",
    },
    {
      id: 8,
      name: "Vivek Singh",
      email: "vivek@gmail.com",
      age: 31,
      city: "Delhi",
      role: "Full Stack Developer",
      salary: 65000,
      status: "Active",
    },
    {
      id: 9,
      name: "Anjali Shah",
      email: "anjali@gmail.com",
      age: 24,
      city: "Mumbai",
      role: "Frontend Developer",
      salary: 36000,
      status: "Inactive",
    },
    {
      id: 10,
      name: "Arjun Patel",
      email: "arjun@gmail.com",
      age: 30,
      city: "Surat",
      role: "Backend Developer",
      salary: 52000,
      status: "Active",
    },
    {
      id: 11,
      name: "Mehul Joshi",
      email: "mehul@gmail.com",
      age: 26,
      city: "Rajkot",
      role: "UI Designer",
      salary: 32000,
      status: "Active",
    },
    {
      id: 12,
      name: "Pooja Mehta",
      email: "pooja@gmail.com",
      age: 25,
      city: "Pune",
      role: "Frontend Developer",
      salary: 40000,
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      age: 24,
      city: "Surat",
      role: "Frontend Developer",
      salary: 35000,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
      age: 26,
      city: "Ahmedabad",
      role: "Backend Developer",
      salary: 42000,
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      age: 23,
      city: "Mumbai",
      role: "UI Designer",
      salary: 30000,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Neha Shah",
      email: "neha@gmail.com",
      age: 27,
      city: "Vadodara",
      role: "Full Stack Developer",
      salary: 55000,
      status: "Active",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      age: 29,
      city: "Pune",
      role: "Backend Developer",
      salary: 48000,
      status: "Active",
    },
    {
      id: 6,
      name: "Karan Joshi",
      email: "karan@gmail.com",
      age: 25,
      city: "Surat",
      role: "Frontend Developer",
      salary: 38000,
      status: "Inactive",
    },
    {
      id: 7,
      name: "Sneha Desai",
      email: "sneha@gmail.com",
      age: 28,
      city: "Ahmedabad",
      role: "HR Manager",
      salary: 45000,
      status: "Active",
    },
    {
      id: 8,
      name: "Vivek Singh",
      email: "vivek@gmail.com",
      age: 31,
      city: "Delhi",
      role: "Full Stack Developer",
      salary: 65000,
      status: "Active",
    },
    {
      id: 9,
      name: "Anjali Shah",
      email: "anjali@gmail.com",
      age: 24,
      city: "Mumbai",
      role: "Frontend Developer",
      salary: 36000,
      status: "Inactive",
    },
    {
      id: 10,
      name: "Arjun Patel",
      email: "arjun@gmail.com",
      age: 30,
      city: "Surat",
      role: "Backend Developer",
      salary: 52000,
      status: "Active",
    },
    {
      id: 11,
      name: "Mehul Joshi",
      email: "mehul@gmail.com",
      age: 26,
      city: "Rajkot",
      role: "UI Designer",
      salary: 32000,
      status: "Active",
    },
    {
      id: 12,
      name: "Pooja Mehta",
      email: "pooja@gmail.com",
      age: 25,
      city: "Pune",
      role: "Frontend Developer",
      salary: 40000,
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      age: 24,
      city: "Surat",
      role: "Frontend Developer",
      salary: 35000,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
      age: 26,
      city: "Ahmedabad",
      role: "Backend Developer",
      salary: 42000,
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      age: 23,
      city: "Mumbai",
      role: "UI Designer",
      salary: 30000,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Neha Shah",
      email: "neha@gmail.com",
      age: 27,
      city: "Vadodara",
      role: "Full Stack Developer",
      salary: 55000,
      status: "Active",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      age: 29,
      city: "Pune",
      role: "Backend Developer",
      salary: 48000,
      status: "Active",
    },
    {
      id: 6,
      name: "Karan Joshi",
      email: "karan@gmail.com",
      age: 25,
      city: "Surat",
      role: "Frontend Developer",
      salary: 38000,
      status: "Inactive",
    },
    {
      id: 7,
      name: "Sneha Desai",
      email: "sneha@gmail.com",
      age: 28,
      city: "Ahmedabad",
      role: "HR Manager",
      salary: 45000,
      status: "Active",
    },
    {
      id: 8,
      name: "Vivek Singh",
      email: "vivek@gmail.com",
      age: 31,
      city: "Delhi",
      role: "Full Stack Developer",
      salary: 65000,
      status: "Active",
    },
    {
      id: 9,
      name: "Anjali Shah",
      email: "anjali@gmail.com",
      age: 24,
      city: "Mumbai",
      role: "Frontend Developer",
      salary: 36000,
      status: "Inactive",
    },
    {
      id: 10,
      name: "Arjun Patel",
      email: "arjun@gmail.com",
      age: 30,
      city: "Surat",
      role: "Backend Developer",
      salary: 52000,
      status: "Active",
    },
    {
      id: 11,
      name: "Mehul Joshi",
      email: "mehul@gmail.com",
      age: 26,
      city: "Rajkot",
      role: "UI Designer",
      salary: 32000,
      status: "Active",
    },
    {
      id: 12,
      name: "Pooja Mehta",
      email: "pooja@gmail.com",
      age: 25,
      city: "Pune",
      role: "Frontend Developer",
      salary: 40000,
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      age: 24,
      city: "Surat",
      role: "Frontend Developer",
      salary: 35000,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
      age: 26,
      city: "Ahmedabad",
      role: "Backend Developer",
      salary: 42000,
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      age: 23,
      city: "Mumbai",
      role: "UI Designer",
      salary: 30000,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Neha Shah",
      email: "neha@gmail.com",
      age: 27,
      city: "Vadodara",
      role: "Full Stack Developer",
      salary: 55000,
      status: "Active",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      age: 29,
      city: "Pune",
      role: "Backend Developer",
      salary: 48000,
      status: "Active",
    },
    {
      id: 6,
      name: "Karan Joshi",
      email: "karan@gmail.com",
      age: 25,
      city: "Surat",
      role: "Frontend Developer",
      salary: 38000,
      status: "Inactive",
    },
    {
      id: 7,
      name: "Sneha Desai",
      email: "sneha@gmail.com",
      age: 28,
      city: "Ahmedabad",
      role: "HR Manager",
      salary: 45000,
      status: "Active",
    },
    {
      id: 8,
      name: "Vivek Singh",
      email: "vivek@gmail.com",
      age: 31,
      city: "Delhi",
      role: "Full Stack Developer",
      salary: 65000,
      status: "Active",
    },
    {
      id: 9,
      name: "Anjali Shah",
      email: "anjali@gmail.com",
      age: 24,
      city: "Mumbai",
      role: "Frontend Developer",
      salary: 36000,
      status: "Inactive",
    },
    {
      id: 10,
      name: "Arjun Patel",
      email: "arjun@gmail.com",
      age: 30,
      city: "Surat",
      role: "Backend Developer",
      salary: 52000,
      status: "Active",
    },
    {
      id: 11,
      name: "Mehul Joshi",
      email: "mehul@gmail.com",
      age: 26,
      city: "Rajkot",
      role: "UI Designer",
      salary: 32000,
      status: "Active",
    },
    {
      id: 12,
      name: "Pooja Mehta",
      email: "pooja@gmail.com",
      age: 25,
      city: "Pune",
      role: "Frontend Developer",
      salary: 40000,
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      age: 24,
      city: "Surat",
      role: "Frontend Developer",
      salary: 35000,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
      age: 26,
      city: "Ahmedabad",
      role: "Backend Developer",
      salary: 42000,
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      age: 23,
      city: "Mumbai",
      role: "UI Designer",
      salary: 30000,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Neha Shah",
      email: "neha@gmail.com",
      age: 27,
      city: "Vadodara",
      role: "Full Stack Developer",
      salary: 55000,
      status: "Active",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      age: 29,
      city: "Pune",
      role: "Backend Developer",
      salary: 48000,
      status: "Active",
    },
    {
      id: 6,
      name: "Karan Joshi",
      email: "karan@gmail.com",
      age: 25,
      city: "Surat",
      role: "Frontend Developer",
      salary: 38000,
      status: "Inactive",
    },
    {
      id: 7,
      name: "Sneha Desai",
      email: "sneha@gmail.com",
      age: 28,
      city: "Ahmedabad",
      role: "HR Manager",
      salary: 45000,
      status: "Active",
    },
    {
      id: 8,
      name: "Vivek Singh",
      email: "vivek@gmail.com",
      age: 31,
      city: "Delhi",
      role: "Full Stack Developer",
      salary: 65000,
      status: "Active",
    },
    {
      id: 9,
      name: "Anjali Shah",
      email: "anjali@gmail.com",
      age: 24,
      city: "Mumbai",
      role: "Frontend Developer",
      salary: 36000,
      status: "Inactive",
    },
    {
      id: 10,
      name: "Arjun Patel",
      email: "arjun@gmail.com",
      age: 30,
      city: "Surat",
      role: "Backend Developer",
      salary: 52000,
      status: "Active",
    },
    {
      id: 11,
      name: "Mehul Joshi",
      email: "mehul@gmail.com",
      age: 26,
      city: "Rajkot",
      role: "UI Designer",
      salary: 32000,
      status: "Active",
    },
    {
      id: 12,
      name: "Pooja Mehta",
      email: "pooja@gmail.com",
      age: 25,
      city: "Pune",
      role: "Frontend Developer",
      salary: 40000,
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      age: 24,
      city: "Surat",
      role: "Frontend Developer",
      salary: 35000,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
      age: 26,
      city: "Ahmedabad",
      role: "Backend Developer",
      salary: 42000,
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      age: 23,
      city: "Mumbai",
      role: "UI Designer",
      salary: 30000,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Neha Shah",
      email: "neha@gmail.com",
      age: 27,
      city: "Vadodara",
      role: "Full Stack Developer",
      salary: 55000,
      status: "Active",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      age: 29,
      city: "Pune",
      role: "Backend Developer",
      salary: 48000,
      status: "Active",
    },
    {
      id: 6,
      name: "Karan Joshi",
      email: "karan@gmail.com",
      age: 25,
      city: "Surat",
      role: "Frontend Developer",
      salary: 38000,
      status: "Inactive",
    },
    {
      id: 7,
      name: "Sneha Desai",
      email: "sneha@gmail.com",
      age: 28,
      city: "Ahmedabad",
      role: "HR Manager",
      salary: 45000,
      status: "Active",
    },
    {
      id: 8,
      name: "Vivek Singh",
      email: "vivek@gmail.com",
      age: 31,
      city: "Delhi",
      role: "Full Stack Developer",
      salary: 65000,
      status: "Active",
    },
    {
      id: 9,
      name: "Anjali Shah",
      email: "anjali@gmail.com",
      age: 24,
      city: "Mumbai",
      role: "Frontend Developer",
      salary: 36000,
      status: "Inactive",
    },
    {
      id: 10,
      name: "Arjun Patel",
      email: "arjun@gmail.com",
      age: 30,
      city: "Surat",
      role: "Backend Developer",
      salary: 52000,
      status: "Active",
    },
    {
      id: 11,
      name: "Mehul Joshi",
      email: "mehul@gmail.com",
      age: 26,
      city: "Rajkot",
      role: "UI Designer",
      salary: 32000,
      status: "Active",
    },
    {
      id: 12,
      name: "Pooja Mehta",
      email: "pooja@gmail.com",
      age: 25,
      city: "Pune",
      role: "Frontend Developer",
      salary: 40000,
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      age: 24,
      city: "Surat",
      role: "Frontend Developer",
      salary: 35000,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
      age: 26,
      city: "Ahmedabad",
      role: "Backend Developer",
      salary: 42000,
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      age: 23,
      city: "Mumbai",
      role: "UI Designer",
      salary: 30000,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Neha Shah",
      email: "neha@gmail.com",
      age: 27,
      city: "Vadodara",
      role: "Full Stack Developer",
      salary: 55000,
      status: "Active",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      age: 29,
      city: "Pune",
      role: "Backend Developer",
      salary: 48000,
      status: "Active",
    },
    {
      id: 6,
      name: "Karan Joshi",
      email: "karan@gmail.com",
      age: 25,
      city: "Surat",
      role: "Frontend Developer",
      salary: 38000,
      status: "Inactive",
    },
    {
      id: 7,
      name: "Sneha Desai",
      email: "sneha@gmail.com",
      age: 28,
      city: "Ahmedabad",
      role: "HR Manager",
      salary: 45000,
      status: "Active",
    },
    {
      id: 8,
      name: "Vivek Singh",
      email: "vivek@gmail.com",
      age: 31,
      city: "Delhi",
      role: "Full Stack Developer",
      salary: 65000,
      status: "Active",
    },
    {
      id: 9,
      name: "Anjali Shah",
      email: "anjali@gmail.com",
      age: 24,
      city: "Mumbai",
      role: "Frontend Developer",
      salary: 36000,
      status: "Inactive",
    },
    {
      id: 10,
      name: "Arjun Patel",
      email: "arjun@gmail.com",
      age: 30,
      city: "Surat",
      role: "Backend Developer",
      salary: 52000,
      status: "Active",
    },
    {
      id: 11,
      name: "Mehul Joshi",
      email: "mehul@gmail.com",
      age: 26,
      city: "Rajkot",
      role: "UI Designer",
      salary: 32000,
      status: "Active",
    },
    {
      id: 12,
      name: "Pooja Mehta",
      email: "pooja@gmail.com",
      age: 25,
      city: "Pune",
      role: "Frontend Developer",
      salary: 40000,
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      age: 24,
      city: "Surat",
      role: "Frontend Developer",
      salary: 35000,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
      age: 26,
      city: "Ahmedabad",
      role: "Backend Developer",
      salary: 42000,
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      age: 23,
      city: "Mumbai",
      role: "UI Designer",
      salary: 30000,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Neha Shah",
      email: "neha@gmail.com",
      age: 27,
      city: "Vadodara",
      role: "Full Stack Developer",
      salary: 55000,
      status: "Active",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      age: 29,
      city: "Pune",
      role: "Backend Developer",
      salary: 48000,
      status: "Active",
    },
    {
      id: 6,
      name: "Karan Joshi",
      email: "karan@gmail.com",
      age: 25,
      city: "Surat",
      role: "Frontend Developer",
      salary: 38000,
      status: "Inactive",
    },
    {
      id: 7,
      name: "Sneha Desai",
      email: "sneha@gmail.com",
      age: 28,
      city: "Ahmedabad",
      role: "HR Manager",
      salary: 45000,
      status: "Active",
    },
    {
      id: 8,
      name: "Vivek Singh",
      email: "vivek@gmail.com",
      age: 31,
      city: "Delhi",
      role: "Full Stack Developer",
      salary: 65000,
      status: "Active",
    },
    {
      id: 9,
      name: "Anjali Shah",
      email: "anjali@gmail.com",
      age: 24,
      city: "Mumbai",
      role: "Frontend Developer",
      salary: 36000,
      status: "Inactive",
    },
    {
      id: 10,
      name: "Arjun Patel",
      email: "arjun@gmail.com",
      age: 30,
      city: "Surat",
      role: "Backend Developer",
      salary: 52000,
      status: "Active",
    },
    {
      id: 11,
      name: "Mehul Joshi",
      email: "mehul@gmail.com",
      age: 26,
      city: "Rajkot",
      role: "UI Designer",
      salary: 32000,
      status: "Active",
    },
    {
      id: 12,
      name: "Pooja Mehta",
      email: "pooja@gmail.com",
      age: 25,
      city: "Pune",
      role: "Frontend Developer",
      salary: 40000,
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      age: 24,
      city: "Surat",
      role: "Frontend Developer",
      salary: 35000,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
      age: 26,
      city: "Ahmedabad",
      role: "Backend Developer",
      salary: 42000,
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      age: 23,
      city: "Mumbai",
      role: "UI Designer",
      salary: 30000,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Neha Shah",
      email: "neha@gmail.com",
      age: 27,
      city: "Vadodara",
      role: "Full Stack Developer",
      salary: 55000,
      status: "Active",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      age: 29,
      city: "Pune",
      role: "Backend Developer",
      salary: 48000,
      status: "Active",
    },
    {
      id: 6,
      name: "Karan Joshi",
      email: "karan@gmail.com",
      age: 25,
      city: "Surat",
      role: "Frontend Developer",
      salary: 38000,
      status: "Inactive",
    },
    {
      id: 7,
      name: "Sneha Desai",
      email: "sneha@gmail.com",
      age: 28,
      city: "Ahmedabad",
      role: "HR Manager",
      salary: 45000,
      status: "Active",
    },
    {
      id: 8,
      name: "Vivek Singh",
      email: "vivek@gmail.com",
      age: 31,
      city: "Delhi",
      role: "Full Stack Developer",
      salary: 65000,
      status: "Active",
    },
    {
      id: 9,
      name: "Anjali Shah",
      email: "anjali@gmail.com",
      age: 24,
      city: "Mumbai",
      role: "Frontend Developer",
      salary: 36000,
      status: "Inactive",
    },
    {
      id: 10,
      name: "Arjun Patel",
      email: "arjun@gmail.com",
      age: 30,
      city: "Surat",
      role: "Backend Developer",
      salary: 52000,
      status: "Active",
    },
    {
      id: 11,
      name: "Mehul Joshi",
      email: "mehul@gmail.com",
      age: 26,
      city: "Rajkot",
      role: "UI Designer",
      salary: 32000,
      status: "Active",
    },
    {
      id: 12,
      name: "Pooja Mehta",
      email: "pooja@gmail.com",
      age: 25,
      city: "Pune",
      role: "Frontend Developer",
      salary: 40000,
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      age: 24,
      city: "Surat",
      role: "Frontend Developer",
      salary: 35000,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
      age: 26,
      city: "Ahmedabad",
      role: "Backend Developer",
      salary: 42000,
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      age: 23,
      city: "Mumbai",
      role: "UI Designer",
      salary: 30000,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Neha Shah",
      email: "neha@gmail.com",
      age: 27,
      city: "Vadodara",
      role: "Full Stack Developer",
      salary: 55000,
      status: "Active",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      age: 29,
      city: "Pune",
      role: "Backend Developer",
      salary: 48000,
      status: "Active",
    },
    {
      id: 6,
      name: "Karan Joshi",
      email: "karan@gmail.com",
      age: 25,
      city: "Surat",
      role: "Frontend Developer",
      salary: 38000,
      status: "Inactive",
    },
    {
      id: 7,
      name: "Sneha Desai",
      email: "sneha@gmail.com",
      age: 28,
      city: "Ahmedabad",
      role: "HR Manager",
      salary: 45000,
      status: "Active",
    },
    {
      id: 8,
      name: "Vivek Singh",
      email: "vivek@gmail.com",
      age: 31,
      city: "Delhi",
      role: "Full Stack Developer",
      salary: 65000,
      status: "Active",
    },
    {
      id: 9,
      name: "Anjali Shah",
      email: "anjali@gmail.com",
      age: 24,
      city: "Mumbai",
      role: "Frontend Developer",
      salary: 36000,
      status: "Inactive",
    },
    {
      id: 10,
      name: "Arjun Patel",
      email: "arjun@gmail.com",
      age: 30,
      city: "Surat",
      role: "Backend Developer",
      salary: 52000,
      status: "Active",
    },
    {
      id: 11,
      name: "Mehul Joshi",
      email: "mehul@gmail.com",
      age: 26,
      city: "Rajkot",
      role: "UI Designer",
      salary: 32000,
      status: "Active",
    },
    {
      id: 12,
      name: "Pooja Mehta",
      email: "pooja@gmail.com",
      age: 25,
      city: "Pune",
      role: "Frontend Developer",
      salary: 40000,
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      age: 24,
      city: "Surat",
      role: "Frontend Developer",
      salary: 35000,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
      age: 26,
      city: "Ahmedabad",
      role: "Backend Developer",
      salary: 42000,
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Verma",
      email: "aman@gmail.com",
      age: 23,
      city: "Mumbai",
      role: "UI Designer",
      salary: 30000,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Neha Shah",
      email: "neha@gmail.com",
      age: 27,
      city: "Vadodara",
      role: "Full Stack Developer",
      salary: 55000,
      status: "Active",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      age: 29,
      city: "Pune",
      role: "Backend Developer",
      salary: 48000,
      status: "Active",
    },
    {
      id: 6,
      name: "Karan Joshi",
      email: "karan@gmail.com",
      age: 25,
      city: "Surat",
      role: "Frontend Developer",
      salary: 38000,
      status: "Inactive",
    },
    {
      id: 7,
      name: "Sneha Desai",
      email: "sneha@gmail.com",
      age: 28,
      city: "Ahmedabad",
      role: "HR Manager",
      salary: 45000,
      status: "Active",
    },
    {
      id: 8,
      name: "Vivek Singh",
      email: "vivek@gmail.com",
      age: 31,
      city: "Delhi",
      role: "Full Stack Developer",
      salary: 65000,
      status: "Active",
    },
    {
      id: 9,
      name: "Anjali Shah",
      email: "anjali@gmail.com",
      age: 24,
      city: "Mumbai",
      role: "Frontend Developer",
      salary: 36000,
      status: "Inactive",
    },
    {
      id: 10,
      name: "Arjun Patel",
      email: "arjun@gmail.com",
      age: 30,
      city: "Surat",
      role: "Backend Developer",
      salary: 52000,
      status: "Active",
    },
    {
      id: 11,
      name: "Mehul Joshi",
      email: "mehul@gmail.com",
      age: 26,
      city: "Rajkot",
      role: "UI Designer",
      salary: 32000,
      status: "Active",
    },
    {
      id: 12,
      name: "Pooja Mehta",
      email: "pooja@gmail.com",
      age: 25,
      city: "Pune",
      role: "Frontend Developer",
      salary: 40000,
      status: "Active",
    },
  ];

  const [showData, setShowData] = useState<User[]>([]);

  const [pages, setPages] = useState(
    Array.from(
      { length: Math.ceil(usersData.length / 10) },
      (_, index) => 1 + index,
    ),
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSort, setShowSort] = useState(false);
  const [salarySort, setSalarySort] = useState(false);
  const [searchData, setSearchData] = useState<User[]>([]);
  const [sortData, setSortData] = useState<User[]>([]);

  useEffect(() => {
    if (sortData.length > 0) {
      const startIndex = (currentPage - 1) * 10;
      const endIndex = 10 * currentPage;
      const filterData: User[] = sortData.slice(startIndex, endIndex);

      setShowData(filterData);
      return;
    }

    if (searchQuery) {
      const startIndex = (currentPage - 1) * 10;
      const endIndex = 10 * currentPage;
      const filterData: User[] = searchData.slice(startIndex, endIndex);

      setShowData(filterData);
      return;
    }

    const startIndex = (currentPage - 1) * 10;
    const endIndex = 10 * currentPage;
    const filterData: User[] = usersData.slice(startIndex, endIndex);

    setShowData(filterData);
  }, [currentPage]);

  useEffect(() => {
    if (searchQuery === "") {
      const startIndex = (currentPage - 1) * 10;
      const endIndex = 10 * currentPage;
      const filterData: User[] = usersData.slice(startIndex, endIndex);

      setShowData(filterData);
      return;
    }

    const filterDataBySearch = usersData.filter((value) =>
      [
        value.age,
        value.city,
        value.email,
        value.id,
        value.name,
        value.role,
        value.salary,
        value.status,
      ]
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase()),
    );

    setPages(
      Array.from(
        { length: Math.ceil(filterDataBySearch.length / 10) },
        (_, index) => 1 + index,
      ),
    );

    setSearchData(filterDataBySearch);
    setShowData(filterDataBySearch.slice(0, 10));
  }, [searchQuery]);

  const handleSalarySort = (order: "asc" | "desc") => {
    if (searchQuery) {
      const sortedData = [...searchData].sort((a, b) =>
        order === "asc" ? a.salary - b.salary : b.salary - a.salary,
      );

      setSortData(sortedData);
      setShowData(sortedData.slice(0, 10));

      return;
    }

    const sortedData = [...usersData].sort((a, b) =>
      order === "asc" ? a.salary - b.salary : b.salary - a.salary,
    );

    setSortData(sortedData);
    setShowData(sortedData.slice(0, 10));
  };

  return (
    <>
      <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
        {/* Theme Toggle */}
        <div className="p-4">
          <ThemeToggle />

          {/* Search */}
          <input
            type="text"
            value={searchQuery}
            placeholder="Search..."
            className="
              mt-3 h-10 w-100 rounded-2xl border-4 border-amber-500
              bg-white px-4 text-gray-900 outline-none
              placeholder:text-gray-400
              focus:border-amber-600
              dark:border-cyan-500
              dark:bg-gray-800
              dark:text-white
              dark:placeholder:text-gray-400
              dark:focus:border-cyan-400
            "
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Table */}
          <div className="mt-5 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left dark:bg-gray-800">
                  <th className="border-b border-gray-200 p-3 dark:border-gray-700">
                    Sr.No
                  </th>
                  <th className="border-b border-gray-200 p-3 dark:border-gray-700">
                    Name
                  </th>
                  <th className="border-b border-gray-200 p-3 dark:border-gray-700">
                    Email
                  </th>
                  <th className="border-b border-gray-200 p-3 dark:border-gray-700">
                    Age
                  </th>
                  <th className="border-b border-gray-200 p-3 dark:border-gray-700">
                    City
                  </th>
                  <th className="border-b border-gray-200 p-3 dark:border-gray-700">
                    Role
                  </th>
                  <th className="border-b border-gray-200 p-3 dark:border-gray-700">
                    Salary
                  </th>
                  <th className="border-b border-gray-200 p-3 dark:border-gray-700">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {showData.map((value, index) => (
                  <tr
                    key={`${value.id}-${index}`}
                    className="
                      border-b border-gray-200
                      hover:bg-gray-50
                      dark:border-gray-700
                      dark:hover:bg-gray-800
                    "
                  >
                    <td className="p-3">{value.id}</td>
                    <td className="p-3">{value.name}</td>
                    <td className="p-3">{value.email}</td>
                    <td className="p-3">{value.age}</td>
                    <td className="p-3">{value.city}</td>
                    <td className="p-3">{value.role}</td>
                    <td className="p-3">{value.salary}</td>
                    <td className="p-3">{value.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sort */}
          <div className="mt-5">
            <button
              className="
                rounded-lg bg-gray-200 px-4 py-2
                text-gray-900
                hover:bg-gray-300
                dark:bg-gray-800
                dark:text-white
                dark:hover:bg-gray-700
              "
              onClick={() => setShowSort((prev) => !prev)}
            >
              Sort by
            </button>

            {showSort && (
              <div className="mt-2 rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                <button
                  className="
                    rounded-lg bg-gray-200 px-4 py-2
                    text-gray-900
                    hover:bg-gray-300
                    dark:bg-gray-700
                    dark:text-white
                    dark:hover:bg-gray-600
                  "
                  onClick={() => setSalarySort((prev) => !prev)}
                >
                  Salary
                </button>

                {salarySort && (
                  <div className="mt-2 flex gap-2">
                    <button
                      className="
                        rounded-lg bg-amber-200 px-3 py-2
                        text-gray-900
                        hover:bg-amber-300
                        dark:bg-cyan-700
                        dark:text-white
                        dark:hover:bg-cyan-600
                      "
                      onClick={() => {
                        handleSalarySort("asc");
                      }}
                    >
                      Salary low to high
                    </button>

                    <button
                      className="
                        rounded-lg bg-amber-200 px-3 py-2
                        text-gray-900
                        hover:bg-amber-300
                        dark:bg-cyan-700
                        dark:text-white
                        dark:hover:bg-cyan-600
                      "
                      onClick={() => {
                        handleSalarySort("desc");
                      }}
                    >
                      Salary high to low
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-5 flex flex-wrap gap-2">
            {pages.map((value) => (
              <button
                key={value}
                className="
                  h-8 w-8 rounded
                  bg-amber-200 text-center text-gray-900
                  hover:bg-amber-300
                  dark:bg-gray-700
                  dark:text-white
                  dark:hover:bg-gray-600
                "
                onClick={() => setCurrentPage(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DataTables;
