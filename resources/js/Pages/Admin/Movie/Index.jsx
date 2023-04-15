import Authenticated from "@/Layouts/Authenticated/Index";
import FlashMessage from "@/Components/FlashMessage";
import { Link } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";

export default function Index({ auth, flashMessage }) {
    return (
        <Authenticated auth={auth}>
            <Link href={route("admin.dashboard.movie.create")}>
                <SecondaryButton type="button" className="w-40 mb-8">
                    Insert New Movie
                </SecondaryButton>
            </Link>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}
        </Authenticated>
    );
}
