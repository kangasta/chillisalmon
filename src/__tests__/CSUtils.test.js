import { CSUtils } from '../ChilliSalmon';

describe('CSUtils._sToSpaces', () => {
	it('converts underscores to spaces', () => {
		expect(CSUtils._sToSpaces('Hello_underscore!')).toEqual('Hello underscore!');
		expect(CSUtils._sToSpaces('m_u_l_t_i')).toEqual('m u l t i');
	});
	it('does no throw on invalid input', () => {
		[null, undefined, 123].forEach(CSUtils._sToSpaces);
	});
});

describe('CSUtils.anyToString', () => {
	it('converts valid inputs to string', () => {
		expect(CSUtils.anyToString(123)).toEqual('123');
	});
	it('does not crash on invalid inputs', () => {
		[null, undefined].forEach(i => {
			expect(CSUtils.anyToString(i)).toEqual('');
		});
	});
});

describe('CSUtils.capitalize', () => {
	it('capitalizes the input string', () => {
		expect(CSUtils.capitalize('asd')).toEqual('Asd');
	});
	it('does not crash on non string inputs', () => {
		[null, undefined].forEach(i => {
			expect(CSUtils.capitalize(i)).toEqual('');
		});
	});
});

describe('CSUtils.checkJsonForErrors', () => {
	it('passes through the input json if no errors found', () => {
		[
			{valid: 'input'},
			{error: null}
		].forEach(input => {
			expect(CSUtils.checkJsonForErrors(input)).toEqual(input);
		});
	});
	it('throws error if non empty error field present in input json', () => {
		[
			{error: 'test'},
			{errors: 'test'}
		].forEach(input => {
			expect(() => CSUtils.checkJsonForErrors(input)).toThrow();
		});
	});
});

describe('CSUtils.makeCanceable', () => {
	it('allows canceling of promise', () => {
		const canceable = CSUtils.makeCancelable(new Promise(resolve => setTimeout(resolve, 1)));
		const then_cb = jest.fn();

		canceable.cancel();
		jest.runOnlyPendingTimers();

		return canceable.promise.then(then_cb).catch(() => {
			expect(then_cb).not.toHaveBeenCalled();
		});
	});
	it('acts as a promise if not canceled', () => {
		const canceable = CSUtils.makeCancelable(new Promise(resolve => setTimeout(resolve, 1)));
		const then_cb = jest.fn();

		canceable.promise.then(then_cb);
		jest.runOnlyPendingTimers();

		return canceable.promise.then(then_cb).then(() => {
			expect(then_cb).toHaveBeenCalled();
		});
	});
});