import { CSUtils } from '../ChilliSalmon';

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
