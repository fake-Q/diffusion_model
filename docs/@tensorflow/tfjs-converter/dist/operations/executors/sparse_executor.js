/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
// tslint:disable-next-line: no-imports-from-dist
import * as tfOps from '@tensorflow/tfjs-core/dist/ops/ops_for_converter';
import { getParamValue } from './utils';
export const executeOp = (node, tensorMap, context, ops = tfOps) => {
    switch (node.op) {
        case 'SparseFillEmptyRows': {
            const { outputIndices, outputValues, emptyRowIndicator, reverseIndexMap } = ops.sparse.sparseFillEmptyRows(getParamValue('indices', node, tensorMap, context), getParamValue('values', node, tensorMap, context), getParamValue('denseShape', node, tensorMap, context), getParamValue('defaultValue', node, tensorMap, context));
            return [
                outputIndices, outputValues, emptyRowIndicator, reverseIndexMap
            ];
        }
        case 'SparseReshape': {
            const { outputIndices, outputShape } = ops.sparse.sparseReshape(getParamValue('inputIndices', node, tensorMap, context), getParamValue('inputShape', node, tensorMap, context), getParamValue('newShape', node, tensorMap, context));
            return [outputIndices, outputShape];
        }
        case 'SparseSegmentMean': {
            const outputData = ops.sparse.sparseSegmentMean(getParamValue('data', node, tensorMap, context), getParamValue('indices', node, tensorMap, context), getParamValue('segmentIds', node, tensorMap, context));
            return [outputData];
        }
        case 'SparseSegmentSum': {
            const outputData = ops.sparse.sparseSegmentSum(getParamValue('data', node, tensorMap, context), getParamValue('indices', node, tensorMap, context), getParamValue('segmentIds', node, tensorMap, context));
            return [outputData];
        }
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};
export const CATEGORY = 'sparse';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhcnNlX2V4ZWN1dG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb252ZXJ0ZXIvc3JjL29wZXJhdGlvbnMvZXhlY3V0b3JzL3NwYXJzZV9leGVjdXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFHSCxpREFBaUQ7QUFDakQsT0FBTyxLQUFLLEtBQUssTUFBTSxrREFBa0QsQ0FBQztBQU0xRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRXRDLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FDbEIsQ0FBQyxJQUFVLEVBQUUsU0FBMEIsRUFDdEMsT0FBeUIsRUFBRSxHQUFHLEdBQUcsS0FBSyxFQUFZLEVBQUU7SUFDbkQsUUFBUSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2YsS0FBSyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sRUFDSixhQUFhLEVBQ2IsWUFBWSxFQUNaLGlCQUFpQixFQUNqQixlQUFlLEVBQ2hCLEdBQ0csR0FBRyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FDMUIsYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FDckMsRUFDWixhQUFhLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFhLEVBQzdELGFBQWEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQ3hDLEVBQ1osYUFBYSxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FDNUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU87Z0JBQ0wsYUFBYSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxlQUFlO2FBQ2hFLENBQUM7U0FDSDtRQUNELEtBQUssZUFBZSxDQUFDLENBQUM7WUFDcEIsTUFBTSxFQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FDekQsYUFBYSxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FDMUMsRUFDWixhQUFhLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFhLEVBQ2pFLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQWEsQ0FBQyxDQUFDO1lBQ3JFLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDckM7UUFDRCxLQUFLLG1CQUFtQixDQUFDLENBQUM7WUFDeEIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FDM0MsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBVyxFQUN6RCxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFhLEVBQzlELGFBQWEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQ3hDLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDckI7UUFDRCxLQUFLLGtCQUFrQixDQUFDLENBQUM7WUFDdkIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FDMUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBVyxFQUN6RCxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFhLEVBQzlELGFBQWEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQ3hDLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDckI7UUFDRDtZQUNFLE1BQU0sU0FBUyxDQUFDLGFBQWEsSUFBSSxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQztLQUM5RDtBQUNILENBQUMsQ0FBQztBQUVOLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7U2NhbGFyLCBUZW5zb3IsIFRlbnNvcjFELCBUZW5zb3IyRH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW1wb3J0cy1mcm9tLWRpc3RcbmltcG9ydCAqIGFzIHRmT3BzIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZS9kaXN0L29wcy9vcHNfZm9yX2NvbnZlcnRlcic7XG5cbmltcG9ydCB7TmFtZWRUZW5zb3JzTWFwfSBmcm9tICcuLi8uLi9kYXRhL3R5cGVzJztcbmltcG9ydCB7RXhlY3V0aW9uQ29udGV4dH0gZnJvbSAnLi4vLi4vZXhlY3V0b3IvZXhlY3V0aW9uX2NvbnRleHQnO1xuaW1wb3J0IHtJbnRlcm5hbE9wRXhlY3V0b3IsIE5vZGV9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHtnZXRQYXJhbVZhbHVlfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IGV4ZWN1dGVPcDogSW50ZXJuYWxPcEV4ZWN1dG9yID1cbiAgICAobm9kZTogTm9kZSwgdGVuc29yTWFwOiBOYW1lZFRlbnNvcnNNYXAsXG4gICAgIGNvbnRleHQ6IEV4ZWN1dGlvbkNvbnRleHQsIG9wcyA9IHRmT3BzKTogVGVuc29yW10gPT4ge1xuICAgICAgc3dpdGNoIChub2RlLm9wKSB7XG4gICAgICAgIGNhc2UgJ1NwYXJzZUZpbGxFbXB0eVJvd3MnOiB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgb3V0cHV0SW5kaWNlcyxcbiAgICAgICAgICAgIG91dHB1dFZhbHVlcyxcbiAgICAgICAgICAgIGVtcHR5Um93SW5kaWNhdG9yLFxuICAgICAgICAgICAgcmV2ZXJzZUluZGV4TWFwXG4gICAgICAgICAgfSA9XG4gICAgICAgICAgICAgIG9wcy5zcGFyc2Uuc3BhcnNlRmlsbEVtcHR5Um93cyhcbiAgICAgICAgICAgICAgICAgIGdldFBhcmFtVmFsdWUoJ2luZGljZXMnLCBub2RlLCB0ZW5zb3JNYXAsIGNvbnRleHQpIGFzXG4gICAgICAgICAgICAgICAgICAgICAgVGVuc29yMkQsXG4gICAgICAgICAgICAgICAgICBnZXRQYXJhbVZhbHVlKCd2YWx1ZXMnLCBub2RlLCB0ZW5zb3JNYXAsIGNvbnRleHQpIGFzIFRlbnNvcjFELFxuICAgICAgICAgICAgICAgICAgZ2V0UGFyYW1WYWx1ZSgnZGVuc2VTaGFwZScsIG5vZGUsIHRlbnNvck1hcCwgY29udGV4dCkgYXNcbiAgICAgICAgICAgICAgICAgICAgICBUZW5zb3IxRCxcbiAgICAgICAgICAgICAgICAgIGdldFBhcmFtVmFsdWUoJ2RlZmF1bHRWYWx1ZScsIG5vZGUsIHRlbnNvck1hcCwgY29udGV4dCkgYXNcbiAgICAgICAgICAgICAgICAgICAgICBTY2FsYXIpO1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBvdXRwdXRJbmRpY2VzLCBvdXRwdXRWYWx1ZXMsIGVtcHR5Um93SW5kaWNhdG9yLCByZXZlcnNlSW5kZXhNYXBcbiAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1NwYXJzZVJlc2hhcGUnOiB7XG4gICAgICAgICAgY29uc3Qge291dHB1dEluZGljZXMsIG91dHB1dFNoYXBlfSA9IG9wcy5zcGFyc2Uuc3BhcnNlUmVzaGFwZShcbiAgICAgICAgICAgICAgZ2V0UGFyYW1WYWx1ZSgnaW5wdXRJbmRpY2VzJywgbm9kZSwgdGVuc29yTWFwLCBjb250ZXh0KSBhc1xuICAgICAgICAgICAgICAgICAgVGVuc29yMkQsXG4gICAgICAgICAgICAgIGdldFBhcmFtVmFsdWUoJ2lucHV0U2hhcGUnLCBub2RlLCB0ZW5zb3JNYXAsIGNvbnRleHQpIGFzIFRlbnNvcjFELFxuICAgICAgICAgICAgICBnZXRQYXJhbVZhbHVlKCduZXdTaGFwZScsIG5vZGUsIHRlbnNvck1hcCwgY29udGV4dCkgYXMgVGVuc29yMUQpO1xuICAgICAgICAgIHJldHVybiBbb3V0cHV0SW5kaWNlcywgb3V0cHV0U2hhcGVdO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1NwYXJzZVNlZ21lbnRNZWFuJzoge1xuICAgICAgICAgIGNvbnN0IG91dHB1dERhdGEgPSBvcHMuc3BhcnNlLnNwYXJzZVNlZ21lbnRNZWFuKFxuICAgICAgICAgICAgICBnZXRQYXJhbVZhbHVlKCdkYXRhJywgbm9kZSwgdGVuc29yTWFwLCBjb250ZXh0KSBhcyBUZW5zb3IsXG4gICAgICAgICAgICAgIGdldFBhcmFtVmFsdWUoJ2luZGljZXMnLCBub2RlLCB0ZW5zb3JNYXAsIGNvbnRleHQpIGFzIFRlbnNvcjFELFxuICAgICAgICAgICAgICBnZXRQYXJhbVZhbHVlKCdzZWdtZW50SWRzJywgbm9kZSwgdGVuc29yTWFwLCBjb250ZXh0KSBhc1xuICAgICAgICAgICAgICAgICAgVGVuc29yMUQpO1xuICAgICAgICAgIHJldHVybiBbb3V0cHV0RGF0YV07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnU3BhcnNlU2VnbWVudFN1bSc6IHtcbiAgICAgICAgICBjb25zdCBvdXRwdXREYXRhID0gb3BzLnNwYXJzZS5zcGFyc2VTZWdtZW50U3VtKFxuICAgICAgICAgICAgICBnZXRQYXJhbVZhbHVlKCdkYXRhJywgbm9kZSwgdGVuc29yTWFwLCBjb250ZXh0KSBhcyBUZW5zb3IsXG4gICAgICAgICAgICAgIGdldFBhcmFtVmFsdWUoJ2luZGljZXMnLCBub2RlLCB0ZW5zb3JNYXAsIGNvbnRleHQpIGFzIFRlbnNvcjFELFxuICAgICAgICAgICAgICBnZXRQYXJhbVZhbHVlKCdzZWdtZW50SWRzJywgbm9kZSwgdGVuc29yTWFwLCBjb250ZXh0KSBhc1xuICAgICAgICAgICAgICAgICAgVGVuc29yMUQpO1xuICAgICAgICAgIHJldHVybiBbb3V0cHV0RGF0YV07XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoYE5vZGUgdHlwZSAke25vZGUub3B9IGlzIG5vdCBpbXBsZW1lbnRlZGApO1xuICAgICAgfVxuICAgIH07XG5cbmV4cG9ydCBjb25zdCBDQVRFR09SWSA9ICdzcGFyc2UnO1xuIl19