import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';



export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
        <Head title="Sign Up"/>
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
            <div className="fixed top-[-50px] hidden lg:block">
                <img src="/images/signup-image.png"
                    className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
            </div>
            <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img src="/images/moonton-white.svg" alt="" />
                    <div className="my-[70px]">
                        <div className="font-semibold text-[26px] mb-3">
                            Sign Up
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br />
                            the better insight for your life
                        </p>
                    </div>
                    <form className="w-[370px]" onSubmit={submit}>
                        <div className="flex flex-col gap-6">
                            <div>
                                <InputLabel 
                                forInput= "name"
                                value="Full Name"
                                />

                                <TextInput 
                                type="text" 
                                name="name" 
                                value={data.name}
                                placeholder="Your fullname..." 
                                isFocused={true}
                                onChange={handleOnChange}
                                required
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel 
                                forInput= "email"
                                value="Email Address"
                                />

                                <TextInput 
                                type="email" 
                                name="email"
                                value={data.email}
                                placeholder="Your Email Address" 
                                onChange={handleOnChange}
                                required
                                />
                                
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel 
                                forInput= "password"
                                value="Password"
                                />

                                <TextInput
                                type="password" 
                                name="password"
                                value={data.password}
                                placeholder="Your Password" 
                                onChange={handleOnChange}
                                required
                                />
                                
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            <div>
                            <InputLabel 
                                forInput= "password"
                                value="Confirm Password"
                                />

                                <TextInput
                                type="password" 
                                name="password_confirmation"
                                value={data.password_confirmation}
                                placeholder="Your Password" 
                                onChange={handleOnChange}
                                required
                                />
                                
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">

                            <SecondaryButton type="submit" disabled={processing}>
                                <span className="text-base font-semibold">
                                    Sign Up
                                </span>
                            </SecondaryButton>

                            <Link href={route('login')}>
                                <SecondaryButton variant="light-outline">
                                    <span className="text-base text-white">
                                        Sign In to My Account
                                    </span>
                                </SecondaryButton>
                            </Link>

                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}