class CSUtils {
	static anyToString(any) {
		try {
			return any.toString();
		} catch(e) {
			return '';
		}
	}

	static capitalize(str_in) {
		try {
			return str_in.charAt(0).toUpperCase() + str_in.slice(1);
		} catch(e) {
			return '';
		}
	}

	static checkJsonForErrors(input_json) {
		['error', 'errors'].forEach(error => {
			if (input_json.hasOwnProperty(error) && input_json[error]) {
				throw new Error(input_json[error]);
			}
		});
		return input_json;
	}

	static makeCancelable(promise) {
		// https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
		var isCanceled = false;
		const wrappedPromise = new Promise((resolve, reject) => {
			promise.then(
				val => isCanceled ? reject({isCanceled: true}) : resolve(val),
				error => isCanceled ? reject({isCanceled: true}) : reject(error)
			);
		});

		return {
			promise: wrappedPromise,
			cancel() {
				isCanceled = true;
			},
		};
	}
}

export default CSUtils;
