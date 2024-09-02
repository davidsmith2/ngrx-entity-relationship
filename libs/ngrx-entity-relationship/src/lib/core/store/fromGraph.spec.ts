import {relatedEntity} from '../relatedEntity';
import {rootEntity} from '../rootEntity';
import {fromGraph} from './fromGraph';
import {injectEntity} from './injectEntity';

describe('store/fromGraph', () => {
    let injectEntitySpy: jasmine.Spy;
    let injectEntityOrig: typeof injectEntity.func;

    beforeEach(() => {
        injectEntityOrig = injectEntity.func;
        injectEntitySpy = spyOn(injectEntity, 'func');
    });

    afterEach(() => {
        injectEntity.func = injectEntityOrig;
    });

    it('makes graph data flat', () => {
        const entity1 = {
            name: 'entity1',
        };
        const entity2 = {
            name: 'entity2',
        };
        const entity3 = {
            name: 'entity3',
        };
        const entity4 = {
            name: 'entity4',
        };
        const data = [
            {
                ...entity1,
                keyValue1: [
                    {
                        ...entity3,
                        keyValue2: entity4,
                    },
                ],
            },
            entity2,
        ];

        const state = {p: Math.random()};
        const state1 = {p: Math.random()};
        const state2 = {p: Math.random()};
        const state3 = {p: Math.random()};
        const state4 = {p: Math.random()};

        const selector = rootEntity<any, any>(
            () => undefined as any,
            relatedEntity<any, any, any>(
                () => undefined as any,
                'keyId1',
                'keyValue1',
                relatedEntity<any, any, any>(() => undefined as any, 'keyId2', 'keyValue2'),
            ),
        );

        injectEntitySpy.and.returnValues(state1, state2, state3, state4);

        const actual = fromGraph.func(state, selector, data);
        expect(actual).toBe(state4);
        expect(injectEntitySpy).toHaveBeenCalledTimes(4);
        expect(injectEntitySpy).toHaveBeenCalledWith(
            state,
            selector,
            jasmine.objectContaining({
                name: 'entity1',
                keyValue1: jasmine.anything(),
            }),
            {skipFields: ['keyValue1']},
        );
        expect(injectEntitySpy).toHaveBeenCalledWith(
            state1,
            selector.relationships[0],
            jasmine.objectContaining({
                name: 'entity3',
                keyValue2: jasmine.anything(),
            }),
            {skipFields: ['keyValue2']},
        );
        expect(injectEntitySpy).toHaveBeenCalledWith(
            state2,
            selector.relationships[0].relationships[0],
            jasmine.objectContaining({
                name: 'entity4',
            }),
            {skipFields: []},
        );
        expect(injectEntitySpy).toHaveBeenCalledWith(
            state3,
            selector,
            jasmine.objectContaining({
                name: 'entity2',
            }),
            {skipFields: ['keyValue1']},
        );
    });

    it('ignores empty entities', () => {
        const state = {p: Math.random()};
        const state1 = {p: Math.random()};
        const data = [
            undefined,
            false,
            null,
            {
                keyValue: [undefined, false, null],
            },
        ];
        const selector = rootEntity<any, any>(
            () => undefined as any,
            relatedEntity<any, any, any>(() => undefined as any, 'keyId', 'keyValue'),
        );

        injectEntitySpy.and.returnValues(state1);

        const actual = fromGraph.func(state, selector, data);
        expect(actual).toBe(state1);
        expect(injectEntitySpy).toHaveBeenCalledTimes(1);
        expect(injectEntitySpy).toHaveBeenCalledWith(state, selector, jasmine.anything(), jasmine.anything());
    });
});
