/**
 * @license
 * Copyright 2022 Google LLC.
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
import { RaggedRange } from '@tensorflow/tfjs-core';
import { raggedRangeImplCPU } from '../kernel_utils/shared';
export function raggedRange(args) {
    const { inputs, backend } = args;
    const { starts, limits, deltas } = inputs;
    const $starts = backend.readSync(starts.dataId);
    const $limits = backend.readSync(limits.dataId);
    const $deltas = backend.readSync(deltas.dataId);
    const [rtNestedSplitsData, rtDenseValuesData] = raggedRangeImplCPU($starts, starts.shape, starts.dtype, $limits, limits.shape, $deltas, deltas.shape);
    const rtNestedSplits = backend.makeTensorInfo([rtNestedSplitsData.length], 'int32', rtNestedSplitsData);
    const rtDenseValues = backend.makeTensorInfo([rtDenseValuesData.length], starts.dtype, rtDenseValuesData);
    return [rtNestedSplits, rtDenseValues];
}
export const raggedRangeConfig = {
    kernelName: RaggedRange,
    backendName: 'webgl',
    kernelFunc: raggedRange,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFnZ2VkUmFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWJhY2tlbmQtd2ViZ2wvc3JjL2tlcm5lbHMvUmFnZ2VkUmFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUEyQixXQUFXLEVBQTRDLE1BQU0sdUJBQXVCLENBQUM7QUFHdkgsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsTUFBTSxVQUFVLFdBQVcsQ0FDdkIsSUFBNEQ7SUFFOUQsTUFBTSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUMsR0FBRyxJQUFJLENBQUM7SUFDL0IsTUFBTSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLEdBQUcsTUFBTSxDQUFDO0lBRXhDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBZSxDQUFDO0lBQzlELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBZSxDQUFDO0lBQzlELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBZSxDQUFDO0lBRTlELE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxHQUFHLGtCQUFrQixDQUM5RCxPQUFPLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFDbkUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWxCLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQ3pDLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDOUQsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FDeEMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFFakUsT0FBTyxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQWlCO0lBQzdDLFVBQVUsRUFBRSxXQUFXO0lBQ3ZCLFdBQVcsRUFBRSxPQUFPO0lBQ3BCLFVBQVUsRUFBRSxXQUFvQztDQUNqRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQy5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge0tlcm5lbENvbmZpZywgS2VybmVsRnVuYywgUmFnZ2VkUmFuZ2UsIFJhZ2dlZFJhbmdlSW5wdXRzLCBUZW5zb3JJbmZvLCBUeXBlZEFycmF5fSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge01hdGhCYWNrZW5kV2ViR0x9IGZyb20gJy4uL2JhY2tlbmRfd2ViZ2wnO1xuaW1wb3J0IHtyYWdnZWRSYW5nZUltcGxDUFV9IGZyb20gJy4uL2tlcm5lbF91dGlscy9zaGFyZWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmFnZ2VkUmFuZ2UoXG4gICAgYXJnczoge2lucHV0czogUmFnZ2VkUmFuZ2VJbnB1dHMsIGJhY2tlbmQ6IE1hdGhCYWNrZW5kV2ViR0x9KTpcbiAgICBbVGVuc29ySW5mbywgVGVuc29ySW5mb10ge1xuICBjb25zdCB7aW5wdXRzLCBiYWNrZW5kfSA9IGFyZ3M7XG4gIGNvbnN0IHtzdGFydHMsIGxpbWl0cywgZGVsdGFzfSA9IGlucHV0cztcblxuICBjb25zdCAkc3RhcnRzID0gYmFja2VuZC5yZWFkU3luYyhzdGFydHMuZGF0YUlkKSBhcyBUeXBlZEFycmF5O1xuICBjb25zdCAkbGltaXRzID0gYmFja2VuZC5yZWFkU3luYyhsaW1pdHMuZGF0YUlkKSBhcyBUeXBlZEFycmF5O1xuICBjb25zdCAkZGVsdGFzID0gYmFja2VuZC5yZWFkU3luYyhkZWx0YXMuZGF0YUlkKSBhcyBUeXBlZEFycmF5O1xuXG4gIGNvbnN0IFtydE5lc3RlZFNwbGl0c0RhdGEsIHJ0RGVuc2VWYWx1ZXNEYXRhXSA9IHJhZ2dlZFJhbmdlSW1wbENQVShcbiAgICAgICRzdGFydHMsIHN0YXJ0cy5zaGFwZSwgc3RhcnRzLmR0eXBlLCAkbGltaXRzLCBsaW1pdHMuc2hhcGUsICRkZWx0YXMsXG4gICAgICBkZWx0YXMuc2hhcGUpO1xuXG4gIGNvbnN0IHJ0TmVzdGVkU3BsaXRzID0gYmFja2VuZC5tYWtlVGVuc29ySW5mbyhcbiAgICAgIFtydE5lc3RlZFNwbGl0c0RhdGEubGVuZ3RoXSwgJ2ludDMyJywgcnROZXN0ZWRTcGxpdHNEYXRhKTtcbiAgY29uc3QgcnREZW5zZVZhbHVlcyA9IGJhY2tlbmQubWFrZVRlbnNvckluZm8oXG4gICAgICBbcnREZW5zZVZhbHVlc0RhdGEubGVuZ3RoXSwgc3RhcnRzLmR0eXBlLCBydERlbnNlVmFsdWVzRGF0YSk7XG5cbiAgcmV0dXJuIFtydE5lc3RlZFNwbGl0cywgcnREZW5zZVZhbHVlc107XG59XG5cbmV4cG9ydCBjb25zdCByYWdnZWRSYW5nZUNvbmZpZzogS2VybmVsQ29uZmlnID0ge1xuICBrZXJuZWxOYW1lOiBSYWdnZWRSYW5nZSxcbiAgYmFja2VuZE5hbWU6ICd3ZWJnbCcsXG4gIGtlcm5lbEZ1bmM6IHJhZ2dlZFJhbmdlIGFzIHVua25vd24gYXMgS2VybmVsRnVuYyxcbn07XG4iXX0=