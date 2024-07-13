interface UploadFileTodo {
	title: string;
	files: string[];
	isCompleted: boolean;
}

interface Todo {
	_id?: number;
	title: string;
	img: string;
	isCompleted: boolean;
}
