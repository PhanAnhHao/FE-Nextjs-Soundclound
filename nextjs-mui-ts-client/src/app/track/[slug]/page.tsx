'use client';
import { useSearchParams } from 'next/navigation';

const DetailTrackPage = ({ params }: { params: { slug: string } }) => {

    const searchParams = useSearchParams();

    const search = searchParams.get('audio');

    console.log('Search Params:', search);

    return (
        <div>Detail Track Page: {params.slug}</div>
    );
}

export default DetailTrackPage;