import Image from 'next/image';

const AdSection = () => {
    return (
        <div style={{
            width: '1880px',
            height: '302px',
            transform: 'rotate(0deg)',
            opacity: 1,
        }}>
            <Image 
                src="/images/ad.png" 
                alt="Beautiful Brighten Lotion" 
                layout="fill" 
                objectFit="cover" 
                priority
            />
        </div>
    );
};

export default AdSection;