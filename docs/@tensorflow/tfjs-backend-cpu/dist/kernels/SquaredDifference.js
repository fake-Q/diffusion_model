/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
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
import { SquaredDifference } from '@tensorflow/tfjs-core';
import { createSimpleBinaryKernelImpl } from '../utils/binary_impl';
import { binaryKernelFunc } from '../utils/binary_utils';
export const squaredDifferenceImpl = createSimpleBinaryKernelImpl(((a, b) => {
    const diff = a - b;
    return diff * diff;
}));
export const squaredDifference = binaryKernelFunc(SquaredDifference, squaredDifferenceImpl);
export const squaredDifferenceConfig = {
    kernelName: SquaredDifference,
    backendName: 'cpu',
    kernelFunc: squaredDifference
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3F1YXJlZERpZmZlcmVuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWJhY2tlbmQtY3B1L3NyYy9rZXJuZWxzL1NxdWFyZWREaWZmZXJlbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBZSxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRXRFLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRXZELE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUM5Qiw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFFO0lBQ3JELE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDUixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FDMUIsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUUvRCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBaUI7SUFDbkQsVUFBVSxFQUFFLGlCQUFpQjtJQUM3QixXQUFXLEVBQUUsS0FBSztJQUNsQixVQUFVLEVBQUUsaUJBQWlCO0NBQzlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7S2VybmVsQ29uZmlnLCBTcXVhcmVkRGlmZmVyZW5jZX0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHtjcmVhdGVTaW1wbGVCaW5hcnlLZXJuZWxJbXBsfSBmcm9tICcuLi91dGlscy9iaW5hcnlfaW1wbCc7XG5pbXBvcnQge2JpbmFyeUtlcm5lbEZ1bmN9IGZyb20gJy4uL3V0aWxzL2JpbmFyeV91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBzcXVhcmVkRGlmZmVyZW5jZUltcGwgPVxuICAgIGNyZWF0ZVNpbXBsZUJpbmFyeUtlcm5lbEltcGwoKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgZGlmZiA9IGEgLSBiO1xuICAgICAgcmV0dXJuIGRpZmYgKiBkaWZmO1xuICAgIH0pKTtcbmV4cG9ydCBjb25zdCBzcXVhcmVkRGlmZmVyZW5jZSA9XG4gICAgYmluYXJ5S2VybmVsRnVuYyhTcXVhcmVkRGlmZmVyZW5jZSwgc3F1YXJlZERpZmZlcmVuY2VJbXBsKTtcblxuZXhwb3J0IGNvbnN0IHNxdWFyZWREaWZmZXJlbmNlQ29uZmlnOiBLZXJuZWxDb25maWcgPSB7XG4gIGtlcm5lbE5hbWU6IFNxdWFyZWREaWZmZXJlbmNlLFxuICBiYWNrZW5kTmFtZTogJ2NwdScsXG4gIGtlcm5lbEZ1bmM6IHNxdWFyZWREaWZmZXJlbmNlXG59O1xuIl19