import scss from './TodoItem.module.scss';

const TodoItem = () => {
	return (
		<section className={scss.TodoItem}>
			<div className="container">
				<div className={scss.content}>
					<h3>TodoItem</h3>
				</div>
			</div>
		</section>
	);
};
export default TodoItem;
