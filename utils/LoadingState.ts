export enum DataLoadingStatus {
	loading,
	content,
	empty,
	error,
}

export class DataLoadingState {
	private state: DataLoadingStatus;
	public message: string;

	constructor(state: DataLoadingStatus = DataLoadingStatus.loading) {
		this.state = state;
		this.message = "";
	}

	// Us this to init this state class when needed to have an idle state
	init() {
		this.state = DataLoadingStatus.content;
		return this;
	}

	setLoading() {
		this.state = DataLoadingStatus.loading;
	}

	setContent() {
		this.state = DataLoadingStatus.content;
	}
	setEmpty() {
		this.state = DataLoadingStatus.empty;
	}

	setError(message: string) {
		this.message = message;
		this.state = DataLoadingStatus.error;
	}
	isLoading(): boolean {
		return this.state === DataLoadingStatus.loading;
	}

	isContent(): boolean {
		return this.state === DataLoadingStatus.content;
	}
	isEmpty(): boolean {
		return this.state === DataLoadingStatus.empty;
	}

	isError(): boolean {
		return this.state === DataLoadingStatus.error;
	}
}
