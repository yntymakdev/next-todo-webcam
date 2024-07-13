'use client';
import React, { FC, ReactNode } from 'react';
import { ReduxProvider } from '@/providers/ReduxProvider';
import LayoutPage from '@/components/layout/LayoutPage';

interface RootLayoutClientProps {
	children: ReactNode;
}

const RootLayoutClient: FC<RootLayoutClientProps> = ({ children }) => {
	return (
		<>
			<ReduxProvider>
				<LayoutPage>{children}</LayoutPage>
			</ReduxProvider>
		</>
	);
};

export default RootLayoutClient;
