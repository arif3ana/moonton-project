import Authenticated from "@/Layouts/Authenticated/Index";
import FlashMessage from "@/Components/FlashMessage";
import { Head, Link } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";

export default function Index({ auth, flashMessage, movies }) {
    return (
        <>
            <Head title="Admin-Dashboard" />
            <Authenticated auth={auth}>
                <Link href={route("admin.dashboard.movie.create")}>
                    <SecondaryButton type="button" className="w-40 mb-8">
                        Insert New Movie
                    </SecondaryButton>
                </Link>
                {flashMessage?.message && (
                    <FlashMessage message={flashMessage.message} />
                )}

                <table className="table-fixed w-full text-center">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>
                                    <img
                                        src={`/storage/${movie.thumbnail}`}
                                        className="w-32 rounded-md"
                                    />
                                </td>
                                <td> {movie.name} </td>
                                <td> {movie.category} </td>
                                <td> {movie.rating.toFixed(1)} </td>
                                <td>
                                    <Link
                                        href={route(
                                            "admin.dashboard.movie.edit",
                                            movie.id
                                        )}
                                    >
                                        <SecondaryButton
                                            type="button"
                                            variant="warning"
                                        >
                                            Edit
                                        </SecondaryButton>
                                    </Link>
                                </td>
                                <td>
                                    <SecondaryButton
                                        type="button"
                                        variant="danger"
                                    >
                                        Delete
                                    </SecondaryButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Authenticated>
        </>
    );
}
