export default function Pagination({ page, onChange }) {
    return (
        <div className="flex justify-end gap-2 mt-8">
            <button onClick={() => onChange(page - 1)} disabled={page === 1}>Prev</button>
            <button onClick={() => onChange(page + 1)}>Next</button>
        </div>
    );
}