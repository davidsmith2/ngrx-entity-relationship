import {childEntitySelector} from '../core/childEntitySelector';
import {rootEntitySelector} from '../core/rootEntitySelector';
import {toGraphQL} from '../graphql/toGraphQL';

describe('toGraphQL', () => {
    const root = rootEntitySelector(jasmine.createSpy(), {
        gqlFields: ['id', 'name'],
    });
    const rootChild = childEntitySelector<any, any, any>(jasmine.createSpy(), 'childId', 'child', {
        gqlFields: ['subId', 'subName'],
    });
    const selector = root(rootChild());

    const normalize = (query: string) =>
        query
            .replace(/\s+/gm, ' ')
            .replace(/\s*([{}])\s*/gm, '$1')
            .trim();

    it('generates a wrapped block with a query', () => {
        expect(normalize(toGraphQL('data', selector))).toEqual(
            normalize(`
            {
                data {
                    child {
                        childId
                        subId
                        subName
                    }
                    id
                    name
                }
            }`),
        );
    });

    it('generates a block with an empty query', () => {
        expect(normalize(toGraphQL('', selector))).toEqual(
            normalize(`
            {
                child {
                    childId
                    subId
                    subName
                }
                id
                name
            }
        `),
        );
    });

    it('generates fields without a query', () => {
        expect(normalize(toGraphQL(selector))).toEqual(
            normalize(`
            child {
                childId
                subId
                subName
            }
            id
            name
        `),
        );
    });
});
