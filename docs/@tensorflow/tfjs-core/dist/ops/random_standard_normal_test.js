/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import * as tf from '../index';
import { ALL_ENVS, describeWithFlags } from '../jasmine_util';
import { expectArrayInMeanStdRange, jarqueBeraNormalityTest } from './rand_util';
describeWithFlags('randomStandardNormal', ALL_ENVS, () => {
    const SEED = 42;
    const EPSILON = 0.05;
    it('should return a float32 1D of random standard normal values', async () => {
        const SAMPLES = 10000;
        // Ensure defaults to float32.
        let result = tf.randomStandardNormal([SAMPLES], null, SEED);
        expect(result.dtype).toBe('float32');
        expect(result.shape).toEqual([SAMPLES]);
        jarqueBeraNormalityTest(await result.data());
        expectArrayInMeanStdRange(await result.data(), 0, 1, EPSILON);
        result = tf.randomStandardNormal([SAMPLES], 'float32', SEED);
        expect(result.dtype).toBe('float32');
        expect(result.shape).toEqual([SAMPLES]);
        jarqueBeraNormalityTest(await result.data());
        expectArrayInMeanStdRange(await result.data(), 0, 1, EPSILON);
    });
    it('should return a int32 1D of random standard normal values', async () => {
        const SAMPLES = 10000;
        const result = tf.randomStandardNormal([SAMPLES], 'int32', SEED);
        expect(result.dtype).toBe('int32');
        expect(result.shape).toEqual([SAMPLES]);
        jarqueBeraNormalityTest(await result.data());
        expectArrayInMeanStdRange(await result.data(), 0, 1, EPSILON);
    });
    it('should return a float32 2D of random standard normal values', async () => {
        const SAMPLES = 100;
        // Ensure defaults to float32.
        let result = tf.randomStandardNormal([SAMPLES, SAMPLES], null, SEED);
        expect(result.dtype).toBe('float32');
        expect(result.shape).toEqual([SAMPLES, SAMPLES]);
        jarqueBeraNormalityTest(await result.data());
        expectArrayInMeanStdRange(await result.data(), 0, 1, EPSILON);
        result = tf.randomStandardNormal([SAMPLES, SAMPLES], 'float32', SEED);
        expect(result.dtype).toBe('float32');
        expect(result.shape).toEqual([SAMPLES, SAMPLES]);
        jarqueBeraNormalityTest(await result.data());
        expectArrayInMeanStdRange(await result.data(), 0, 1, EPSILON);
    });
    it('should return a int32 2D of random standard normal values', async () => {
        const SAMPLES = 100;
        const result = tf.randomStandardNormal([SAMPLES, SAMPLES], 'int32', SEED);
        expect(result.dtype).toBe('int32');
        expect(result.shape).toEqual([SAMPLES, SAMPLES]);
        jarqueBeraNormalityTest(await result.data());
        expectArrayInMeanStdRange(await result.data(), 0, 1, EPSILON);
    });
    it('should return a float32 3D of random standard normal values', async () => {
        const SAMPLES_SHAPE = [20, 20, 20];
        // Ensure defaults to float32.
        let result = tf.randomStandardNormal(SAMPLES_SHAPE, null, SEED);
        expect(result.dtype).toBe('float32');
        expect(result.shape).toEqual(SAMPLES_SHAPE);
        jarqueBeraNormalityTest(await result.data());
        expectArrayInMeanStdRange(await result.data(), 0, 1, EPSILON);
        result = tf.randomStandardNormal(SAMPLES_SHAPE, 'float32', SEED);
        expect(result.dtype).toBe('float32');
        expect(result.shape).toEqual(SAMPLES_SHAPE);
        jarqueBeraNormalityTest(await result.data());
        expectArrayInMeanStdRange(await result.data(), 0, 1, EPSILON);
    });
    it('should return a int32 3D of random standard normal values', async () => {
        const SAMPLES_SHAPE = [20, 20, 20];
        const result = tf.randomStandardNormal(SAMPLES_SHAPE, 'int32', SEED);
        expect(result.dtype).toBe('int32');
        expect(result.shape).toEqual(SAMPLES_SHAPE);
        jarqueBeraNormalityTest(await result.data());
        expectArrayInMeanStdRange(await result.data(), 0, 1, EPSILON);
    });
    it('should return a float32 4D of random standard normal values', async () => {
        const SAMPLES_SHAPE = [10, 10, 10, 10];
        // Ensure defaults to float32.
        let result = tf.randomStandardNormal(SAMPLES_SHAPE, null, SEED);
        expect(result.dtype).toBe('float32');
        expect(result.shape).toEqual(SAMPLES_SHAPE);
        jarqueBeraNormalityTest(await result.data());
        expectArrayInMeanStdRange(await result.data(), 0, 1, EPSILON);
        result = tf.randomStandardNormal(SAMPLES_SHAPE, 'float32', SEED);
        expect(result.dtype).toBe('float32');
        expect(result.shape).toEqual(SAMPLES_SHAPE);
        jarqueBeraNormalityTest(await result.data());
        expectArrayInMeanStdRange(await result.data(), 0, 1, EPSILON);
    });
    it('should return a int32 4D of random standard normal values', async () => {
        const SAMPLES_SHAPE = [10, 10, 10, 10];
        const result = tf.randomStandardNormal(SAMPLES_SHAPE, 'int32', SEED);
        expect(result.dtype).toBe('int32');
        expect(result.shape).toEqual(SAMPLES_SHAPE);
        jarqueBeraNormalityTest(await result.data());
        expectArrayInMeanStdRange(await result.data(), 0, 1, EPSILON);
    });
    it('should return a int32 5D of random standard normal values', async () => {
        const SAMPLES_SHAPE = [10, 10, 10, 10, 10];
        const result = tf.randomStandardNormal(SAMPLES_SHAPE, 'int32', SEED);
        expect(result.dtype).toBe('int32');
        expect(result.shape).toEqual(SAMPLES_SHAPE);
        jarqueBeraNormalityTest(await result.data());
        expectArrayInMeanStdRange(await result.data(), 0, 1, EPSILON);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tX3N0YW5kYXJkX25vcm1hbF90ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9vcHMvcmFuZG9tX3N0YW5kYXJkX25vcm1hbF90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQy9CLE9BQU8sRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU1RCxPQUFPLEVBQUMseUJBQXlCLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFFL0UsaUJBQWlCLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUN2RCxNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7SUFDaEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBRXJCLEVBQUUsQ0FBQyw2REFBNkQsRUFDN0QsS0FBSyxJQUFJLEVBQUU7UUFDVCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFdEIsOEJBQThCO1FBQzlCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDeEMsdUJBQXVCLENBQUMsTUFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3Qyx5QkFBeUIsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FB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TyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVDLHVCQUF1QixDQUFDLE1BQU0sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0MseUJBQXlCLENBQUMsTUFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywyREFBMkQsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN6RSxNQUFNLGFBQWEsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUzQyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1Qyx1QkFBdUIsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLHlCQUF5QixDQUFDLE1BQU0sTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQge0FMTF9FTlZTLCBkZXNjcmliZVdpdGhGbGFnc30gZnJvbSAnLi4vamFzbWluZV91dGlsJztcblxuaW1wb3J0IHtleHBlY3RBcnJheUluTWVhblN0ZFJhbmdlLCBqYXJxdWVCZXJhTm9ybWFsaXR5VGVzdH0gZnJvbSAnLi9yYW5kX3V0aWwnO1xuXG5kZXNjcmliZVdpdGhGbGFncygncmFuZG9tU3RhbmRhcmROb3JtYWwnLCBBTExfRU5WUywgKCkgPT4ge1xuICBjb25zdCBTRUVEID0gNDI7XG4gIGNvbnN0IEVQU0lMT04gPSAwLjA1O1xuXG4gIGl0KCdzaG91bGQgcmV0dXJuIGEgZmxvYXQzMiAxRCBvZiByYW5kb20gc3RhbmRhcmQgbm9ybWFsIHZhbHVlcycsXG4gICAgIGFzeW5jICgpID0+IHtcbiAgICAgICBjb25zdCBTQU1QTEVTID0gMTAwMDA7XG5cbiAgICAgICAvLyBFbnN1cmUgZGVmYXVsdHMgdG8gZmxvYXQzMi5cbiAgICAgICBsZXQgcmVzdWx0ID0gdGYucmFuZG9tU3RhbmRhcmROb3JtYWwoW1NBTVBMRVNdLCBudWxsLCBTRUVEKTtcbiAgICAgICBleHBlY3QocmVzdWx0LmR0eXBlKS50b0JlKCdmbG9hdDMyJyk7XG4gICAgICAgZXhwZWN0KHJlc3VsdC5zaGFwZSkudG9FcXVhbChbU0FNUExFU10pO1xuICAgICAgIGphcnF1ZUJlcmFOb3JtYWxpdHlUZXN0KGF3YWl0IHJlc3VsdC5kYXRhKCkpO1xuICAgICAgIGV4cGVjdEFycmF5SW5NZWFuU3RkUmFuZ2UoYXdhaXQgcmVzdWx0LmRhdGEoKSwgMCwgMSwgRVBTSUxPTik7XG5cbiAgICAgICByZXN1bHQgPSB0Zi5yYW5kb21TdGFuZGFyZE5vcm1hbChbU0FNUExFU10sICdmbG9hdDMyJywgU0VFRCk7XG4gICAgICAgZXhwZWN0KHJlc3VsdC5kdHlwZSkudG9CZSgnZmxvYXQzMicpO1xuICAgICAgIGV4cGVjdChyZXN1bHQuc2hhcGUpLnRvRXF1YWwoW1NBTVBMRVNdKTtcbiAgICAgICBqYXJxdWVCZXJhTm9ybWFsaXR5VGVzdChhd2FpdCByZXN1bHQuZGF0YSgpKTtcbiAgICAgICBleHBlY3RBcnJheUluTWVhblN0ZFJhbmdlKGF3YWl0IHJlc3VsdC5kYXRhKCksIDAsIDEsIEVQU0lMT04pO1xuICAgICB9KTtcblxuICBpdCgnc2hvdWxkIHJldHVybiBhIGludDMyIDFEIG9mIHJhbmRvbSBzdGFuZGFyZCBub3JtYWwgdmFsdWVzJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IFNBTVBMRVMgPSAxMDAwMDtcbiAgICBjb25zdCByZXN1bHQgPSB0Zi5yYW5kb21TdGFuZGFyZE5vcm1hbChbU0FNUExFU10sICdpbnQzMicsIFNFRUQpO1xuICAgIGV4cGVjdChyZXN1bHQuZHR5cGUpLnRvQmUoJ2ludDMyJyk7XG4gICAgZXhwZWN0KHJlc3VsdC5zaGFwZSkudG9FcXVhbChbU0FNUExFU10pO1xuICAgIGphcnF1ZUJlcmFOb3JtYWxpdHlUZXN0KGF3YWl0IHJlc3VsdC5kYXRhKCkpO1xuICAgIGV4cGVjdEFycmF5SW5NZWFuU3RkUmFuZ2UoYXdhaXQgcmVzdWx0LmRhdGEoKSwgMCwgMSwgRVBTSUxPTik7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgcmV0dXJuIGEgZmxvYXQzMiAyRCBvZiByYW5kb20gc3RhbmRhcmQgbm9ybWFsIHZhbHVlcycsXG4gICAgIGFzeW5jICgpID0+IHtcbiAgICAgICBjb25zdCBTQU1QTEVTID0gMTAwO1xuXG4gICAgICAgLy8gRW5zdXJlIGRlZmF1bHRzIHRvIGZsb2F0MzIuXG4gICAgICAgbGV0IHJlc3VsdCA9IHRmLnJhbmRvbVN0YW5kYXJkTm9ybWFsKFtTQU1QTEVTLCBTQU1QTEVTXSwgbnVsbCwgU0VFRCk7XG4gICAgICAgZXhwZWN0KHJlc3VsdC5kdHlwZSkudG9CZSgnZmxvYXQzMicpO1xuICAgICAgIGV4cGVjdChyZXN1bHQuc2hhcGUpLnRvRXF1YWwoW1NBTVBMRVMsIFNBTVBMRVNdKTtcbiAgICAgICBqYXJxdWVCZXJhTm9ybWFsaXR5VGVzdChhd2FpdCByZXN1bHQuZGF0YSgpKTtcbiAgICAgICBleHBlY3RBcnJheUluTWVhblN0ZFJhbmdlKGF3YWl0IHJlc3VsdC5kYXRhKCksIDAsIDEsIEVQU0lMT04pO1xuXG4gICAgICAgcmVzdWx0ID0gdGYucmFuZG9tU3RhbmRhcmROb3JtYWwoW1NBTVBMRVMsIFNBTVBMRVNdLCAnZmxvYXQzMicsIFNFRUQpO1xuICAgICAgIGV4cGVjdChyZXN1bHQuZHR5cGUpLnRvQmUoJ2Zsb2F0MzInKTtcbiAgICAgICBleHBlY3QocmVzdWx0LnNoYXBlKS50b0VxdWFsKFtTQU1QTEVTLCBTQU1QTEVTXSk7XG4gICAgICAgamFycXVlQmVyYU5vcm1hbGl0eVRlc3QoYXdhaXQgcmVzdWx0LmRhdGEoKSk7XG4gICAgICAgZXhwZWN0QXJyYXlJbk1lYW5TdGRSYW5nZShhd2FpdCByZXN1bHQuZGF0YSgpLCAwLCAxLCBFUFNJTE9OKTtcbiAgICAgfSk7XG5cbiAgaXQoJ3Nob3VsZCByZXR1cm4gYSBpbnQzMiAyRCBvZiByYW5kb20gc3RhbmRhcmQgbm9ybWFsIHZhbHVlcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBTQU1QTEVTID0gMTAwO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRmLnJhbmRvbVN0YW5kYXJkTm9ybWFsKFtTQU1QTEVTLCBTQU1QTEVTXSwgJ2ludDMyJywgU0VFRCk7XG4gICAgZXhwZWN0KHJlc3VsdC5kdHlwZSkudG9CZSgnaW50MzInKTtcbiAgICBleHBlY3QocmVzdWx0LnNoYXBlKS50b0VxdWFsKFtTQU1QTEVTLCBTQU1QTEVTXSk7XG4gICAgamFycXVlQmVyYU5vcm1hbGl0eVRlc3QoYXdhaXQgcmVzdWx0LmRhdGEoKSk7XG4gICAgZXhwZWN0QXJyYXlJbk1lYW5TdGRSYW5nZShhd2FpdCByZXN1bHQuZGF0YSgpLCAwLCAxLCBFUFNJTE9OKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCByZXR1cm4gYSBmbG9hdDMyIDNEIG9mIHJhbmRvbSBzdGFuZGFyZCBub3JtYWwgdmFsdWVzJyxcbiAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgIGNvbnN0IFNBTVBMRVNfU0hBUEUgPSBbMjAsIDIwLCAyMF07XG5cbiAgICAgICAvLyBFbnN1cmUgZGVmYXVsdHMgdG8gZmxvYXQzMi5cbiAgICAgICBsZXQgcmVzdWx0ID0gdGYucmFuZG9tU3RhbmRhcmROb3JtYWwoU0FNUExFU19TSEFQRSwgbnVsbCwgU0VFRCk7XG4gICAgICAgZXhwZWN0KHJlc3VsdC5kdHlwZSkudG9CZSgnZmxvYXQzMicpO1xuICAgICAgIGV4cGVjdChyZXN1bHQuc2hhcGUpLnRvRXF1YWwoU0FNUExFU19TSEFQRSk7XG4gICAgICAgamFycXVlQmVyYU5vcm1hbGl0eVRlc3QoYXdhaXQgcmVzdWx0LmRhdGEoKSk7XG4gICAgICAgZXhwZWN0QXJyYXlJbk1lYW5TdGRSYW5nZShhd2FpdCByZXN1bHQuZGF0YSgpLCAwLCAxLCBFUFNJTE9OKTtcblxuICAgICAgIHJlc3VsdCA9IHRmLnJhbmRvbVN0YW5kYXJkTm9ybWFsKFNBTVBMRVNfU0hBUEUsICdmbG9hdDMyJywgU0VFRCk7XG4gICAgICAgZXhwZWN0KHJlc3VsdC5kdHlwZSkudG9CZSgnZmxvYXQzMicpO1xuICAgICAgIGV4cGVjdChyZXN1bHQuc2hhcGUpLnRvRXF1YWwoU0FNUExFU19TSEFQRSk7XG4gICAgICAgamFycXVlQmVyYU5vcm1hbGl0eVRlc3QoYXdhaXQgcmVzdWx0LmRhdGEoKSk7XG4gICAgICAgZXhwZWN0QXJyYXlJbk1lYW5TdGRSYW5nZShhd2FpdCByZXN1bHQuZGF0YSgpLCAwLCAxLCBFUFNJTE9OKTtcbiAgICAgfSk7XG5cbiAgaXQoJ3Nob3VsZCByZXR1cm4gYSBpbnQzMiAzRCBvZiByYW5kb20gc3RhbmRhcmQgbm9ybWFsIHZhbHVlcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBTQU1QTEVTX1NIQVBFID0gWzIwLCAyMCwgMjBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRmLnJhbmRvbVN0YW5kYXJkTm9ybWFsKFNBTVBMRVNfU0hBUEUsICdpbnQzMicsIFNFRUQpO1xuICAgIGV4cGVjdChyZXN1bHQuZHR5cGUpLnRvQmUoJ2ludDMyJyk7XG4gICAgZXhwZWN0KHJlc3VsdC5zaGFwZSkudG9FcXVhbChTQU1QTEVTX1NIQVBFKTtcbiAgICBqYXJxdWVCZXJhTm9ybWFsaXR5VGVzdChhd2FpdCByZXN1bHQuZGF0YSgpKTtcbiAgICBleHBlY3RBcnJheUluTWVhblN0ZFJhbmdlKGF3YWl0IHJlc3VsdC5kYXRhKCksIDAsIDEsIEVQU0lMT04pO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHJldHVybiBhIGZsb2F0MzIgNEQgb2YgcmFuZG9tIHN0YW5kYXJkIG5vcm1hbCB2YWx1ZXMnLFxuICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgY29uc3QgU0FNUExFU19TSEFQRSA9IFsxMCwgMTAsIDEwLCAxMF07XG5cbiAgICAgICAvLyBFbnN1cmUgZGVmYXVsdHMgdG8gZmxvYXQzMi5cbiAgICAgICBsZXQgcmVzdWx0ID0gdGYucmFuZG9tU3RhbmRhcmROb3JtYWwoU0FNUExFU19TSEFQRSwgbnVsbCwgU0VFRCk7XG4gICAgICAgZXhwZWN0KHJlc3VsdC5kdHlwZSkudG9CZSgnZmxvYXQzMicpO1xuICAgICAgIGV4cGVjdChyZXN1bHQuc2hhcGUpLnRvRXF1YWwoU0FNUExFU19TSEFQRSk7XG4gICAgICAgamFycXVlQmVyYU5vcm1hbGl0eVRlc3QoYXdhaXQgcmVzdWx0LmRhdGEoKSk7XG4gICAgICAgZXhwZWN0QXJyYXlJbk1lYW5TdGRSYW5nZShhd2FpdCByZXN1bHQuZGF0YSgpLCAwLCAxLCBFUFNJTE9OKTtcblxuICAgICAgIHJlc3VsdCA9IHRmLnJhbmRvbVN0YW5kYXJkTm9ybWFsKFNBTVBMRVNfU0hBUEUsICdmbG9hdDMyJywgU0VFRCk7XG4gICAgICAgZXhwZWN0KHJlc3VsdC5kdHlwZSkudG9CZSgnZmxvYXQzMicpO1xuICAgICAgIGV4cGVjdChyZXN1bHQuc2hhcGUpLnRvRXF1YWwoU0FNUExFU19TSEFQRSk7XG4gICAgICAgamFycXVlQmVyYU5vcm1hbGl0eVRlc3QoYXdhaXQgcmVzdWx0LmRhdGEoKSk7XG4gICAgICAgZXhwZWN0QXJyYXlJbk1lYW5TdGRSYW5nZShhd2FpdCByZXN1bHQuZGF0YSgpLCAwLCAxLCBFUFNJTE9OKTtcbiAgICAgfSk7XG5cbiAgaXQoJ3Nob3VsZCByZXR1cm4gYSBpbnQzMiA0RCBvZiByYW5kb20gc3RhbmRhcmQgbm9ybWFsIHZhbHVlcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBTQU1QTEVTX1NIQVBFID0gWzEwLCAxMCwgMTAsIDEwXTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IHRmLnJhbmRvbVN0YW5kYXJkTm9ybWFsKFNBTVBMRVNfU0hBUEUsICdpbnQzMicsIFNFRUQpO1xuICAgIGV4cGVjdChyZXN1bHQuZHR5cGUpLnRvQmUoJ2ludDMyJyk7XG4gICAgZXhwZWN0KHJlc3VsdC5zaGFwZSkudG9FcXVhbChTQU1QTEVTX1NIQVBFKTtcbiAgICBqYXJxdWVCZXJhTm9ybWFsaXR5VGVzdChhd2FpdCByZXN1bHQuZGF0YSgpKTtcbiAgICBleHBlY3RBcnJheUluTWVhblN0ZFJhbmdlKGF3YWl0IHJlc3VsdC5kYXRhKCksIDAsIDEsIEVQU0lMT04pO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHJldHVybiBhIGludDMyIDVEIG9mIHJhbmRvbSBzdGFuZGFyZCBub3JtYWwgdmFsdWVzJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IFNBTVBMRVNfU0hBUEUgPSBbMTAsIDEwLCAxMCwgMTAsIDEwXTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IHRmLnJhbmRvbVN0YW5kYXJkTm9ybWFsKFNBTVBMRVNfU0hBUEUsICdpbnQzMicsIFNFRUQpO1xuICAgIGV4cGVjdChyZXN1bHQuZHR5cGUpLnRvQmUoJ2ludDMyJyk7XG4gICAgZXhwZWN0KHJlc3VsdC5zaGFwZSkudG9FcXVhbChTQU1QTEVTX1NIQVBFKTtcbiAgICBqYXJxdWVCZXJhTm9ybWFsaXR5VGVzdChhd2FpdCByZXN1bHQuZGF0YSgpKTtcbiAgICBleHBlY3RBcnJheUluTWVhblN0ZFJhbmdlKGF3YWl0IHJlc3VsdC5kYXRhKCksIDAsIDEsIEVQU0lMT04pO1xuICB9KTtcbn0pO1xuIl19