'use client';
import { useGetTodosQuery } from '@/redux/api/todo';
import scss from './TodoList.module.scss';
import Image from 'next/image';

const TodoList = () => {
	const { data } = useGetTodosQuery();

	return (
		<section className={scss.TodoList}>
			<div className="container">
				<div className={scss.content}>
					<h3>TodoList</h3>
					<div className={scss.items}>
						{data?.map((item) => (
							<div key={item._id} className={scss.item}>
								<h1>{item.title}</h1>
								<Image
									width={500}
									height={300}
									src={item.img}
									alt={item.title}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TodoList;
