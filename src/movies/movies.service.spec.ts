import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('should be 4', () => {
  //   expect(2 + 2).toEqual(4); // 2+2가 4와 같기를 기대
  //   // expect(2 + 2).toEqual(5); // 2+2가 4와 같기를 기대
  // });

  // Array를 리턴하는지 테스팅
  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should return a movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2222,
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      // expect(movie.id).toEqual(1);
    });
    it('should throw 404 err', () => {
      try {
        service.getOne(99);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        // expect(e.message).toEqual(`Movie with Id 99 not found.`);
      }
    });
  });

  describe('deleteOne', () => {
    it('deletes a movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2222,
      });
      // console.log(service.getAll());
      const beforeMovies = service.getAll();
      service.deleteOne(1);
      const afterDelete = service.getAll();
      // expect(afterDelete.length).toEqual(beforeMovies.length - 1);
      expect(afterDelete.length).toBeLessThan(beforeMovies.length);
    });
    it('should return a 404', () => {
      try {
        service.deleteOne(99);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        // expect(e.message).toEqual(`Movie with Id 99 not found.`);
      }
    });
  });

  describe('create', () => {
    it('should create a movie', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2222,
      });
      const afterCreate = service.getAll().length;
      console.log(beforeCreate, afterCreate);
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('update', () => {
    it('should update a movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2222,
      });
      service.update(1, { title: 'Updated Test' });
      const movie = service.getOne(1);
      expect(movie.title).toEqual('Updated Test');
    });
    it('should return a 404', () => {
      try {
        service.update(99, {});
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        // expect(e.message).toEqual(`Movie with Id 99 not found.`);
      }
    });
  });
});
