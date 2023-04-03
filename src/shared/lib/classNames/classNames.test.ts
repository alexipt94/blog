import { classNames } from './classNames';

describe('classNames', () => {
    test('first', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('additional', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },

            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
    test('additional2', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },

            ['class1', 'class2'],
        )).toBe(expected);
    });
    test('additional3', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },

            ['class1', 'class2'],
        )).toBe(expected);
    });
});
