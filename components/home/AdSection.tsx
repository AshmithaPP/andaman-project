import Image from 'next/image';

const AdSection = () => {
    return (
        <div style={{
            width: '100%',
            maxWidth: '1660px',
            height: '302px',
            position: 'relative',
            margin: '0 auto',
            overflow: 'hidden'
        }}>
            <Image 
                src="/images/ad.png" 
                alt="Beautiful Brighten Lotion" 
                fill
                style={{ objectFit: 'cover' }}
                priority
            />
        </div>
    );
};

export default AdSection;