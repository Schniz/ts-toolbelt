import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Number} from './Number'

/**
@hidden
*/
export type _IsZero<N extends Iteration> = {
    '-': 0
    '+': 0
    '0': 1
}[N[4]]

/**
Check whether a [[Number]] is null or not
@param N to check
@returns [[Boolean]]
@example
```ts
import {N} from 'ts-toolbelt'

type test0 = N.IsZero<'0'>  // True
type test1 = N.IsZero<'-7'> // False
type test2 = N.IsZero<'7'>  // False
```
*/
export type IsZero<N extends Number> =
    _IsZero<IterationOf<N>>
