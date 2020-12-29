const text = 'Hola Mundo'
const fruits = ['manzana', 'melon', 'banana']

test('Debe contener un texto', () => {
	expect(text).toMatch(/Mundo/)
})

test('Tenemos una banana', () => {
	expect(fruits).toContain('banana')
})

test('Mayor que otro', () => {
	expect(10).toBeGreaterThan(9)
})

test('IsTrue?', () => {
	expect(true).toBeTruthy()
})

const reverseString = (str, callback) => {
	callback(str.split('').reverse().join(''))
}
test('Probar un callback', () => {
	reverseString('hola', str => {
		expect(str).toBe('aloh')
	})
})

const reverseString2 = str => str.split('').reverse().join('')

test('PRobando funcion', () => expect(reverseString2('hola')).toBe('aloh'))
