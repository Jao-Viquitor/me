import Image from 'next/image';

export default function ProfileImage() {
    return (
        <div className="w-24 h-24 rounded-full mx-auto">
            <Image
                src="/assets/profile.jpeg"
                alt="Profile"
                width={96}
                height={96}
                className="rounded-full"
            />
        </div>
    );
}


