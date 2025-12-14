export default function CourseCard({ course }) {
    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md mb-6 overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                    <img src={course.imageUrl} className="w-full h-full object-cover" />
                </div>


                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                            {course.title}
                        </h2>
                        <p className="text-gray-600 mb-3">{course.description}</p>
                        <p className="text-sm text-gray-700 mb-2">{course.instructor}</p>


                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-orange-600 font-bold">{course.rating}</span>
                            <span className="text-gray-600 text-sm">({course.totalReviews})</span>
                        </div>


                        <div className="text-sm text-gray-600">
                            {course.totalHours} hours • {course.totalLectures} lectures • {course.level}
                        </div>


                        {course.isBestseller && (
                            <span className="inline-block mt-2 bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded">
                                Bestseller
                            </span>
                        )}
                    </div>


                    <div className="flex justify-end gap-2 mt-4">
                        <span className="text-2xl font-bold">₫{course.currentPrice}</span>
                        <span className="line-through text-gray-400">₫{course.originalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}