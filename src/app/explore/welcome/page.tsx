'use client'
import Image from 'next/image'
import useUserStore from '@/state/userStore'
import { myImageLoader } from '@/lib/imageHelper'
import { AiOutlineCamera } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import lighthouse from "@lighthouse-web3/sdk"
import { useRef, useState } from 'react'

async function uploadImage(selectedImage) {
    return await lighthouse.upload(selectedImage, process.env.NEXT_PUBLIC_LH_API);
}

export default function Page() {

    const { push } = useRouter()
    const userStore = useUserStore()
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null); 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('')
    const [bio, setBio] = useState('')
    const [email, setEmail] = useState('')

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleBioChange = (event) => {
        setBio(event.target.value)
    }


    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };

    const handleImageChange = () => {
        fileInputRef.current.click();  // Trigger file input click
    };

    const areAllFieldsFilled = () => {
        return firstName && lastName && username && email && bio;
    };


    const handleFileInputChange = async (event) => {
            
        const selectedFile = event.target.files[0];

        console.log(selectedFile)

        if (selectedFile) {
            try {
            // Convert the selected file to a data URL
            const dataUrl = await readFileAsDataURL(selectedFile);

            // console.log("Data URL: " + dataUrl)


            // Ensure dataUrl is a string before updating userStore
            if (typeof dataUrl === 'string') {
                // Update the userStore with the data URL
                userStore.setUser({
                profileImage: dataUrl,
                });

                // Update the src prop of the Image component
                setSelectedImage(selectedFile);
            } else {
                console.error('Error converting file to data URL. Invalid data URL format.');
            }

            } catch (error) {
            console.error('Error converting file to data URL:', error);
            }
        }
    };


    // Helper function to read file as data URL
    const readFileAsDataURL = (file) => {
        return new Promise((resolve, reject) => {
        const reader = new FileReader();
    
        reader.onloadend = () => {
            resolve(reader.result);
        };
    
        reader.onerror = (error) => {
            reject(error);
        };
    
        reader.readAsDataURL(file);
        });
    };
    

    type Url = {
        url: string
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const fullName = `${firstName} ${lastName}`;

        if (userStore.user) {
            userStore.setUser({
                name: fullName,
                userName: username,
                bio: bio
            })
        }

        if (selectedImage) {
            try {
                const response = await uploadImage(selectedImage);

                console.log("IMAGE UPLOADED : ", response)

                // Redirect to the dashboard
                push('/dashboard');
            } catch (error) {
                console.error('Image upload failed', error);
            }
        } else {
            // If no image is selected, proceed without uploading
            push('/dashboard');
        }
    };




    return (
        <div className="absolute inset-0 z-50 bg-black w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-[90%] max-h-screen mx-auto transition-all duration-500 ease-in-out rounded-xl px-6 py-6 flex flex-col gap-4 shadow-xl my-auto" style={{ border: '1px solid white' }}>
            <h1 className="font-logirentBold text-primary_1 text-center font-bold text-5xl rounded-md py-3 w-[80%] lg:w-[100%] h-[10%]"
            >
                {' '}
                Welcome
            </h1>
            <div className="relative w-[25%] mx-auto">
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="imageInput"
                />
                <label htmlFor="imageInput">
                    <Image
                        src={selectedImage ? URL.createObjectURL(selectedImage) : userStore.user.profileImage}
                        alt="profile pic"
                        loader={myImageLoader}
                        unoptimized
                        width={70}
                        height={70}
                        className="max-w-[100%] max-h-[100%] rounded-full cursor-pointer"
                    />
                </label>

                <button className="absolute -bottom-2 left-10 text-primary_7 bg-primary_10 p-1.5 rounded-full">
                <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="imageInput"
                        ref={fileInputRef}
                        onChange={handleFileInputChange}
                    />
                    <AiOutlineCamera size={20} onClick={handleImageChange} />
                </button>
            </div>
            <form action="" className="text-primary_8 text-sm flex flex-col gap-4 relative ">
                <div className="flex gap-4" >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        {/*FIXME: keep firstName and last name ; .*/}
                        <label htmlFor="name" className="font-bold text-sm text-primary_2">
                            First Name
                        </label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            className="text-primary_7 border border-primary_8 rounded-xl p-2 focus:outline-none bg-transparent"
                        />

                    </div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between " >
                        {/*FIXME: keep firstName and last name ; .*/}
                        <label htmlFor="name" className="font-bold text-sm text-primary_2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={handleLastNameChange}
                            className="text-primary_7 border border-primary_8 rounded-xl p-2 focus:outline-none bg-transparent"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="Username" className="font-medium text-primary_2 text-sm">
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder="Nick name (optional)"
                        value={username}
                        onChange={handleUsernameChange}
                        className="text-primary_7 border border-primary_8 rounded-xl p-2 focus:outline-none bg-transparent"
                        id="Username"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-bold text-sm text-primary_2">
                        Email address
                    </label>
                    <input
                        type="text"
                        value={email}
                        className="text-primary_7 border border-primary_8 rounded-xl p-2 focus:outline-none bg-transparent"
                        id="email"
                        name="email"
                        onChange={handleEmailChange}

                    />
                </div>
                <div className="flex flex-col gap-1 ">
                    <label htmlFor="bio" className="font-medium text-primary_2 text-sm ">
                        Bio
                    </label>
                    <textarea
                        name="bio"
                        id="bio"
                        value={bio}
                        className="text-primary_7 border border-primary_8 rounded-xl p-3 focus:outline-none bg-transparent h-12 overflow-y-hidden"
                        placeholder="About you (optional)"
                        onChange={handleBioChange}
                    ></textarea>
                </div>
                <div className="font-semibold flex justify-center gap-4 items-center mt-2">
                    <button
                        onClick={handleSubmit}
                        className={`bg-primary_10 bg-blue text-primary_4 rounded-full px-4 py-2 w-[200px] text-center mt-4 ${
                            areAllFieldsFilled() ? '' : 'opacity-50 cursor-not-allowed'
                        }`}
                        disabled={!areAllFieldsFilled()} // Disable the button if fields are not filled
                    // TODO: fixme this is not activated. Use userStore.syncDB to save to DB. And pass false as the second argument to userStore.setUser
                    >

                        Proceed
                    </button>
                </div>
            </form>
        </div>
    )
}
