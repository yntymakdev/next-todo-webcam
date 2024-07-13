import { FC } from 'react';

interface ParamsProps {
	params: {
		эльхан: string;
	};
}

const page: FC<ParamsProps> = ({ params }) => {
	console.log(params.эльхан);

	return <div>Item: {params.эльхан}</div>;
};

export default page;
