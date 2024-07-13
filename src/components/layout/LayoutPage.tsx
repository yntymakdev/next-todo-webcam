import { FC, ReactNode, useEffect, useState } from 'react';
import scss from './LayoutPage.module.scss';
import { useGetTodosQuery } from '@/redux/api/todo';
import PreLoader from '@/ui/preLoader/PreLoader';
import Header from './header/Header';
import Footer from './footer/Footer';

interface LayoutPageProps {
	children: ReactNode;
}

const LayoutPage: FC<LayoutPageProps> = ({ children }) => {
	const { status } = useGetTodosQuery();
	const [isPreLoader, setIsPreloader] = useState(true);

	useEffect(() => {
		if (status === 'fulfilled' || status === 'rejected') {
			setTimeout(() => {
				setIsPreloader(false);
			}, 700);
		}
	}, [status]);

	return (
		<>
			{isPreLoader ? (
				<>
					<PreLoader />
				</>
			) : (
				<>
					<div className={scss.LayoutPage}>
						<Header />
						<main>{children}</main>
						<Footer />
					</div>
				</>
			)}
		</>
	);
};
export default LayoutPage;
