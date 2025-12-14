import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import CourseCard from '../components/CourseCard';
import Pagination from '../components/Pagination';


export default function CourseList() {
    const [courses, setCourses] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        axiosClient.get('/courses').then(res => setCourses(res.data));
    }, []);


    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        <i className="fas fa-graduation-cap text-blue-600 mr-2"></i>
                        All Courses
                    </h1>
                    <p className="text-gray-600">Browse and explore our collection of courses</p>
                </div>
                <Link
                    to="/create"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg"
                >
                    <i className="fas fa-plus-circle"></i>
                    Create New Course
                </Link>
            </div>


            {/* Course list */}
            {courses.map(course => (
                <CourseCard key={course.id} course={course} />
            ))}


            <Pagination page={page} onChange={setPage} />
        </div>
    );
}