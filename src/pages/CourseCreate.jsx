import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../api/axiosClient';


export default function CourseCreate() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        await axiosClient.post('/courses', data);
        alert('Create success');
        navigate('/');
    };


    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">Create New Course</h1>


            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
                <input
                    className="w-full border p-3 mb-2"
                    placeholder="Course Title"
                    {...register('title', { required: 'Required' })}
                />
                {errors.title && <p className="text-red-500">{errors.title.message}</p>}


                <textarea
                    className="w-full border p-3 mb-2"
                    placeholder="Description"
                    {...register('description', { required: true, minLength: 50 })}
                />


                <input
                    className="w-full border p-3 mb-4"
                    placeholder="Image URL"
                    {...register('imageUrl', { required: true })}
                />


                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                    Create Course
                </button>
            </form>
        </div>
    );
}