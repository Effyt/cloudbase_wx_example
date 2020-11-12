import {
    BaseController
} from './init'

class CloudbaseFunController extends BaseController {


    /**
     * @description:       数据库add方法
     * @param {collection} 集合名称
     * @param {param}       传入参数
     * @return: 
     */
    async add(collection, param) {

        try {
            let {
                _id,
                errMsg
            } = await this.tcb.database().collection(collection).add({
                data: param
            })

            if (errMsg != "collection.add:ok") {
                return this.fail()
            }
            return this.success("添加成功", _id)


        } catch (e) {
            return this.fail(e)

        }

    }



    /**
     * @description:       数据库删除记录方法
     * @param {collection} 集合名称
     * @param {param}      查询条件
     * @return: 
     */
    async remove(collection, param) {

        try {
            let {
                errMsg,
                stats
            } = await this.tcb.database().collection(collection).where(param).remove()
            if (errMsg != 'collection.remove:ok') {
                return this.fail()
            } else if (stats.removed <= 0) {
                return this.fail('已删除记录')
            }
            return this.success("删除成功")

        } catch (e) {
            return this.fail(e)

        }

    }



    /**
     * @description:       更新记录
     * @param {collection} 集合名称
     * @param {param}      查询条件
     * @param {upsertData} 更新数据
     * @return: 
     */
    async update(collection, param, upsertData) {
        try {
            let {
                stats,
                errMsg
            } = await this.tcb.database().collection(collection).where(param).update({
                data: upsertData
            })
            if (errMsg != 'collection.update:ok') {
                return this.fail()
            } else if (stats.updated <= 0) {
                return this.fail('已更新记录')
            }
            return this.success("更新成功")
        } catch (e) {
            return this.fail(e)
        }
    }


    /**
     * @description:       数据库查询
     * @param {collection} 集合名称
     * @param {param}      查询条件
     * @return: 
     */
    async query(collection, param) {

        try {
            let {
                data,
                errMsg
            } = await this.tcb.database().collection(collection).where(param).get()
            if (errMsg != 'collection.get:ok') {
                return this.fail()
            }
            return this.success("获取成功", data)
        } catch (e) {
            return this.fail(e)
        }
    }






    /**
     * @description:       查询分页
     * @param {collection} 集合名称
     * @param {param}    传入参数
     * @param {page}    分页
     * @param {count}   单次获取数量
     * @param {sort}    排序
     * @return: 
     */
    async pagingQuery(collection, param, page, count, sort) {

        let skip = page == 1 ? 0 : (--page * count)
        try {
            let {
                data,
                errMsg
            } = await this.tcb.database().collection(collection).where(param).orderBy(sort[0], sort[1]).limit(count).skip(skip).get()
            if (errMsg != 'collection.get:ok') {
                return this.fail()
            }
            return this.success("获取成功", data)

        } catch (e) {
            return this.fail(e)
        }
    }





    /**
     * @description:       查询数据是否包含
     * @param {collection} 集合名称
     * @param {param}   传入参数
     * @return: 
     */
    async includeCollectionCount(collection, param) {
        try {
            let {
                errMsg,
                total
            } = await this.tcb.database().collection(collection).where(param).count()
            if (errMsg != "collection.count:ok") {
                return this.fail()
            }
            return this.success("获取成功", total)

        } catch (e) {

            return this.fail(e)
        }

    }

}





const private_cloudbase_fun = new CloudbaseFunController()
export {
    private_cloudbase_fun
}