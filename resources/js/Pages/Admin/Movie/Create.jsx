import Authenticated from "@/Layouts/Authenticated/Index";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import Checkbox from "@/Components/Checkbox";
import SecondaryButton from "@/Components/SecondaryButton";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.index"));
    };
    return (
        <Authenticated auth={auth}>
            <Head title="admin -create movie" />
            <h1 className="text-xl">Insert A New Movie</h1>
            <hr className="mb-4" />

            <form onSubmit={submit}>
                <InputLabel forInput="name" value="Name" />
                <TextInput
                    type="text"
                    name="name"
                    variant="primary-outline"
                    placeholder="Enter the name of the movie"
                    isError={errors.name}
                    onChange={handleOnChange}
                />
                <InputError message={errors.name} className="mt-2" />

                <InputLabel
                    forInput="category"
                    value="Category"
                    className="mt-4"
                />
                <TextInput
                    type="text"
                    name="category"
                    variant="primary-outline"
                    placeholder="Enter the category of the movie"
                    isError={errors.category}
                    onChange={handleOnChange}
                />
                <InputError message={errors.category} className="mt-2" />

                <InputLabel
                    forInput="video_url"
                    value="Video URL"
                    className="mt-4"
                />
                <TextInput
                    type="url"
                    name="video_url"
                    variant="primary-outline"
                    placeholder="Enter the video URL of the movie"
                    isError={errors.video_url}
                    onChange={handleOnChange}
                />
                <InputError message={errors.video_url} className="mt-2" />

                <InputLabel
                    forInput="thumbnail"
                    value="Thumbnail"
                    className="mt-4"
                />
                <TextInput
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    placeholder="Insert Thumbnail of the movie"
                    isError={errors.thumbnail}
                    onChange={handleOnChange}
                />
                <InputError message={errors.thumbnail} className="mt-2" />

                <InputLabel forInput="rating" value="Rating" className="mt-4" />
                <TextInput
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    placeholder="Enter the rating of the movie"
                    isError={errors.rating}
                    onChange={handleOnChange}
                />
                <InputError message={errors.rating} className="mt-2" />

                <div className="flex flex-row mt-4 items-center">
                    <InputLabel
                        forInput="is_featured"
                        value="Featured"
                        className="mr-3 mt-1"
                    />
                    <Checkbox
                        name="is_featured"
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
                </div>

                <SecondaryButton
                    type="submit"
                    className="mt-4"
                    processing={processing}
                >
                    Save
                </SecondaryButton>
            </form>
        </Authenticated>
    );
}
