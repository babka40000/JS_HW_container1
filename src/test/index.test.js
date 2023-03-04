import Team from '../index';

class Character {
  constructor(name) {
    this.name = name;
  }
}

test('add error', () => {
  const hero1 = new Character('Gendalf');
  const team = new Team();

  team.add(hero1);

  expect(() => team.add(hero1)).toThrowError('Персонаж уже в команде');
});

test('add all and convert to array', () => {
  const hero1 = new Character('Gendalf');
  const hero2 = new Character('Frodo');

  const resArray = [hero1, hero2];
  const team = new Team();

  team.addAll(hero1, hero2, hero1, hero2);

  expect(team.toArray()).toEqual(resArray);
});
