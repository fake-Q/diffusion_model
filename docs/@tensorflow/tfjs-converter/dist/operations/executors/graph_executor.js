/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
import { cloneTensor, getParamValue, getTensor } from './utils';
export const executeOp = (node, tensorMap, context, ops = tfOps) => {
    switch (node.op) {
        case 'Const': {
            return tensorMap[node.name];
        }
        case 'PlaceholderWithDefault':
            const def = getParamValue('default', node, tensorMap, context);
            return [getTensor(node.name, tensorMap, context) || def];
        case 'Placeholder':
            return [getTensor(node.name, tensorMap, context)];
        case 'Identity':
        case 'StopGradient':
        case 'FakeQuantWithMinMaxVars': { // This op is currently ignored.
            const data = getParamValue('x', node, tensorMap, context);
            return [cloneTensor(data)];
        }
        case 'IdentityN':
            return getParamValue('x', node, tensorMap, context)
                .map((t) => cloneTensor(t));
        case 'Snapshot':
            const snapshot = getParamValue('x', node, tensorMap, context);
            return [cloneTensor(snapshot)];
        case 'Shape':
            return [ops.tensor1d(getParamValue('x', node, tensorMap, context).shape, 'int32')];
        case 'ShapeN':
            return getParamValue('x', node, tensorMap, context)
                .map((t) => ops.tensor1d(t.shape));
        case 'Size':
            return [ops.scalar(getParamValue('x', node, tensorMap, context).size, 'int32')];
        case 'Rank':
            return [ops.scalar(getParamValue('x', node, tensorMap, context).rank, 'int32')];
        case 'NoOp':
            return [ops.scalar(1)];
        case 'Print':
            const input = getParamValue('x', node, tensorMap, context);
            const data = getParamValue('data', node, tensorMap, context);
            const message = getParamValue('message', node, tensorMap, context);
            const summarize = getParamValue('summarize', node, tensorMap, context);
            console.warn('The graph has a tf.print() operation,' +
                'usually used for debugging, which slows down performance.');
            console.log(message);
            for (let i = 0; i < data.length; i++) {
                console.log(Array.prototype.slice.call(data[i].dataSync())
                    .slice(0, summarize));
            }
            return [input];
        default:
            throw TypeError(`Node type ${node.op} is not implemented`);
    }
};
export const CATEGORY = 'graph';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhfZXhlY3V0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWNvbnZlcnRlci9zcmMvb3BlcmF0aW9ucy9leGVjdXRvcnMvZ3JhcGhfZXhlY3V0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBR0gsaURBQWlEO0FBQ2pELE9BQU8sS0FBSyxLQUFLLE1BQU0sa0RBQWtELENBQUM7QUFNMUUsT0FBTyxFQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRTlELE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FDbEIsQ0FBQyxJQUFVLEVBQUUsU0FBMEIsRUFDdEMsT0FBeUIsRUFBRSxHQUFHLEdBQUcsS0FBSyxFQUFZLEVBQUU7SUFDbkQsUUFBUSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2YsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNaLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QjtRQUNELEtBQUssd0JBQXdCO1lBQzNCLE1BQU0sR0FBRyxHQUNMLGFBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQVcsQ0FBQztZQUNqRSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQzNELEtBQUssYUFBYTtZQUNoQixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEQsS0FBSyxVQUFVLENBQUM7UUFDaEIsS0FBSyxjQUFjLENBQUM7UUFDcEIsS0FBSyx5QkFBeUIsQ0FBQyxDQUFDLEVBQUcsZ0NBQWdDO1lBQ2pFLE1BQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxHQUFHLEVB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LE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7VGVuc29yfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbXBvcnRzLWZyb20tZGlzdFxuaW1wb3J0ICogYXMgdGZPcHMgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlL2Rpc3Qvb3BzL29wc19mb3JfY29udmVydGVyJztcblxuaW1wb3J0IHtOYW1lZFRlbnNvcnNNYXB9IGZyb20gJy4uLy4uL2RhdGEvdHlwZXMnO1xuaW1wb3J0IHtFeGVjdXRpb25Db250ZXh0fSBmcm9tICcuLi8uLi9leGVjdXRvci9leGVjdXRpb25fY29udGV4dCc7XG5pbXBvcnQge0ludGVybmFsT3BFeGVjdXRvciwgTm9kZX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQge2Nsb25lVGVuc29yLCBnZXRQYXJhbVZhbHVlLCBnZXRUZW5zb3J9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgZXhlY3V0ZU9wOiBJbnRlcm5hbE9wRXhlY3V0b3IgPVxuICAgIChub2RlOiBOb2RlLCB0ZW5zb3JNYXA6IE5hbWVkVGVuc29yc01hcCxcbiAgICAgY29udGV4dDogRXhlY3V0aW9uQ29udGV4dCwgb3BzID0gdGZPcHMpOiBUZW5zb3JbXSA9PiB7XG4gICAgICBzd2l0Y2ggKG5vZGUub3ApIHtcbiAgICAgICAgY2FzZSAnQ29uc3QnOiB7XG4gICAgICAgICAgcmV0dXJuIHRlbnNvck1hcFtub2RlLm5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1BsYWNlaG9sZGVyV2l0aERlZmF1bHQnOlxuICAgICAgICAgIGNvbnN0IGRlZiA9XG4gICAgICAgICAgICAgIGdldFBhcmFtVmFsdWUoJ2RlZmF1bHQnLCBub2RlLCB0ZW5zb3JNYXAsIGNvbnRleHQpIGFzIFRlbnNvcjtcbiAgICAgICAgICByZXR1cm4gW2dldFRlbnNvcihub2RlLm5hbWUsIHRlbnNvck1hcCwgY29udGV4dCkgfHwgZGVmXTtcbiAgICAgICAgY2FzZSAnUGxhY2Vob2xkZXInOlxuICAgICAgICAgIHJldHVybiBbZ2V0VGVuc29yKG5vZGUubmFtZSwgdGVuc29yTWFwLCBjb250ZXh0KV07XG4gICAgICAgIGNhc2UgJ0lkZW50aXR5JzpcbiAgICAgICAgY2FzZSAnU3RvcEdyYWRpZW50JzpcbiAgICAgICAgY2FzZSAnRmFrZVF1YW50V2l0aE1pbk1heFZhcnMnOiB7ICAvLyBUaGlzIG9wIGlzIGN1cnJlbnRseSBpZ25vcmVkLlxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBnZXRQYXJhbVZhbHVlKCd4Jywgbm9kZSwgdGVuc29yTWFwLCBjb250ZXh0KSBhcyBUZW5zb3I7XG4gICAgICAgICAgcmV0dXJuIFtjbG9uZVRlbnNvcihkYXRhKV07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnSWRlbnRpdHlOJzpcbiAgICAgICAgICByZXR1cm4gKGdldFBhcmFtVmFsdWUoJ3gnLCBub2RlLCB0ZW5zb3JNYXAsIGNvbnRleHQpIGFzIFRlbnNvcltdKVxuICAgICAgICAgICAgICAubWFwKCh0OiBUZW5zb3IpID0+IGNsb25lVGVuc29yKHQpKTtcbiAgICAgICAgY2FzZSAnU25hcHNob3QnOlxuICAgICAgICAgIGNvbnN0IHNuYXBzaG90ID1cbiAgICAgICAgICAgICAgKGdldFBhcmFtVmFsdWUoJ3gnLCBub2RlLCB0ZW5zb3JNYXAsIGNvbnRleHQpIGFzIFRlbnNvcik7XG4gICAgICAgICAgcmV0dXJuIFtjbG9uZVRlbnNvcihzbmFwc2hvdCldO1xuICAgICAgICBjYXNlICdTaGFwZSc6XG4gICAgICAgICAgcmV0dXJuIFtvcHMudGVuc29yMWQoXG4gICAgICAgICAgICAgIChnZXRQYXJhbVZhbHVlKCd4Jywgbm9kZSwgdGVuc29yTWFwLCBjb250ZXh0KSBhcyBUZW5zb3IpLnNoYXBlLFxuICAgICAgICAgICAgICAnaW50MzInKV07XG4gICAgICAgIGNhc2UgJ1NoYXBlTic6XG4gICAgICAgICAgcmV0dXJuIChnZXRQYXJhbVZhbHVlKCd4Jywgbm9kZSwgdGVuc29yTWFwLCBjb250ZXh0KSBhcyBUZW5zb3JbXSlcbiAgICAgICAgICAgICAgLm1hcCgodDogVGVuc29yKSA9PiBvcHMudGVuc29yMWQodC5zaGFwZSkpO1xuICAgICAgICBjYXNlICdTaXplJzpcbiAgICAgICAgICByZXR1cm4gW29wcy5zY2FsYXIoXG4gICAgICAgICAgICAgIChnZXRQYXJhbVZhbHVlKCd4Jywgbm9kZSwgdGVuc29yTWFwLCBjb250ZXh0KSBhcyBUZW5zb3IpLnNpemUsXG4gICAgICAgICAgICAgICdpbnQzMicpXTtcbiAgICAgICAgY2FzZSAnUmFuayc6XG4gICAgICAgICAgcmV0dXJuIFtvcHMuc2NhbGFyKFxuICAgICAgICAgICAgICAoZ2V0UGFyYW1WYWx1ZSgneCcsIG5vZGUsIHRlbnNvck1hcCwgY29udGV4dCkgYXMgVGVuc29yKS5yYW5rLFxuICAgICAgICAgICAgICAnaW50MzInKV07XG4gICAgICAgIGNhc2UgJ05vT3AnOlxuICAgICAgICAgIHJldHVybiBbb3BzLnNjYWxhcigxKV07XG4gICAgICAgIGNhc2UgJ1ByaW50JzpcbiAgICAgICAgICBjb25zdCBpbnB1dCA9IGdldFBhcmFtVmFsdWUoJ3gnLCBub2RlLCB0ZW5zb3JNYXAsIGNvbnRleHQpIGFzIFRlbnNvcjtcbiAgICAgICAgICBjb25zdCBkYXRhID1cbiAgICAgICAgICAgICAgZ2V0UGFyYW1WYWx1ZSgnZGF0YScsIG5vZGUsIHRlbnNvck1hcCwgY29udGV4dCkgYXMgVGVuc29yW107XG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAgICAgICAgIGdldFBhcmFtVmFsdWUoJ21lc3NhZ2UnLCBub2RlLCB0ZW5zb3JNYXAsIGNvbnRleHQpIGFzIHN0cmluZztcbiAgICAgICAgICBjb25zdCBzdW1tYXJpemUgPVxuICAgICAgICAgICAgICBnZXRQYXJhbVZhbHVlKCdzdW1tYXJpemUnLCBub2RlLCB0ZW5zb3JNYXAsIGNvbnRleHQpIGFzIG51bWJlcjtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICdUaGUgZ3JhcGggaGFzIGEgdGYucHJpbnQoKSBvcGVyYXRpb24sJyArXG4gICAgICAgICAgICAgICd1c3VhbGx5IHVzZWQgZm9yIGRlYnVnZ2luZywgd2hpY2ggc2xvd3MgZG93biBwZXJmb3JtYW5jZS4nKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRhdGFbaV0uZGF0YVN5bmMoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgc3VtbWFyaXplKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBbaW5wdXRdO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgVHlwZUVycm9yKGBOb2RlIHR5cGUgJHtub2RlLm9wfSBpcyBub3QgaW1wbGVtZW50ZWRgKTtcbiAgICAgIH1cbiAgICB9O1xuXG5leHBvcnQgY29uc3QgQ0FURUdPUlkgPSAnZ3JhcGgnO1xuIl19