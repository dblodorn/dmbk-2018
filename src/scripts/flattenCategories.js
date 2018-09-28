import forEach from 'lodash/forEach'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'

mixin(_, {
  forEach: forEach
})

export default (input) => {
  console.log(input)
  let arr = []
  _.forEach(input, (val, key) => {
    val.forEach( e => {
      const project = e
      project.cat = key
      arr.push(project)
    })
  })
  return arr
}
