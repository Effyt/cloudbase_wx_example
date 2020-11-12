
# private_cloudbase_fun #

## add 

### 1. 接口描述

接口功能：插入一条文档

接口声明：`add(collection: string,param:Object) Promise<Object>`

### 2. 输入参数

|  参数  | 类型  |必填  |说明  |
| :----: |:----: | :----: | :----: |
| collection  | string |是 |集合名称 |
| data  | object | 是 |{_id: '10001', 'name': 'Ben',_openid:'{openid}'} _id 非必填,openid必填|

### 3. 输出参数

|  字段 | 类型    |说明  |
| :----: |:----:  | :----: |
| code  | number | 0:失败; 1成功 |
| message  | string | 提示 |
| _id | string | 添加记录_id |






## remove
 
### 1. 接口描述

接口功能：删除一条文档

接口声明：`remove(collection: string,param:Object) Promise<Object>`

### 2. 输入参数

|  参数  | 类型  |必填  |说明  |
| :----: |:----: | :----: | :----: |
| collection  | string |是 |集合名称 |
| param | object | 是 |{_id: '10001',_openid:'{openid}'}|

### 3. 输出参数

|  字段 | 类型    |说明  |
| :----: |:----:  | :----: |
| code  | number | 0:失败; 1成功 |
| message  | string | 提示 |




## update

### 1. 接口描述

接口功能：更新文档

接口声明：`update(collection: string,param:Object,upsertData:Object) Promise<Object>`

### 2. 输入参数

|  参数  | 类型  |必填  |说明  |
| :----: |:----: | :----: | :----: |
| collection  | string |是 |集合名称 |
| param | object | 是 |{_id: '10001',_openid:'{openid}'}|
| upsertData | object | 是 |{}|

### 3. 输出参数

|  字段 | 类型    |说明  |
| :----: |:----:  | :----: |
| code  | number | 0:失败; 1成功 |
| message  | string | 提示 |





## query

### 1. 接口描述

接口功能：更新文档

接口声明：`query(collection: string,param:Object) Promise<Object>`

### 2. 输入参数

|  参数  | 类型  |必填  |说明  |
| :----: |:----: | :----: | :----: |
| collection  | string |是 |集合名称 |
| param | object | 是 |{_id: '10001',_openid:'{openid}'}|

### 3. 输出参数
|  字段 | 类型    |说明  |
| :----: |:----:  | :----: |
| code  | number | 0:失败; 1成功 |
| message  | string | 提示 |
| data | object | 查询返回数组 |





## pagingQuery

### 1. 接口描述

接口功能：更新文档

接口声明：`pagingQuery(collection: string,param:Object,page:number,count:number,sort:Object) Promise<Object>`

### 2. 输入参数

|  参数  | 类型  |必填  |说明  |
| :----: |:----: | :----: | :----: |
| collection  | string |是 |集合名称 |
| param | object | 是 |{_id: '10001',_openid:'{openid}'}|
| page |number | 是 |页码|
| count | number  | 是 |  返回数量（每次返回不超过20条）|
| sort | object  | 是 | 降序:['status','asc'] 升序:['status','desc'] |

### 3. 输出参数
|  字段 | 类型    |说明  |
| :----: |:----:  | :----: |
| code  | number | 0:失败; 1成功 |
| message  | string | 提示 |
| data | object | 查询返回数组 |






## includeCollectionCount

### 1. 接口描述

接口功能：更新文档

接口声明：`includeCollectionCount(collection: string,param:Object) Promise<Object>`

### 2. 输入参数

|  参数  | 类型  |必填  |说明  |
| :----: |:----: | :----: | :----: |
| collection  | string |是 |集合名称 |
| param | object | 是 |{_id: '10001',_openid:'{openid}'}|

### 3. 输出参数
|  字段 | 类型    |说明  |
| :----: |:----:  | :----: |
| code  | number | 0:失败; 1成功 |
| message  | string | 提示 |
| total | object | 计数结果|




# public_cloudbase_fun #



## query

### 1. 接口描述

接口功能：更新文档

接口声明：`query(collection: string,param:Object) Promise<Object>`

### 2. 输入参数

|  参数  | 类型  |必填  |说明  |
| :----: |:----: | :----: | :----: |
| collection  | string |是 |集合名称 |
| param | object | 是 |{_id: '10001',_openid:'{openid}'}|

### 3. 输出参数
|  字段 | 类型    |说明  |
| :----: |:----:  | :----: |
| code  | number | 0:失败; 1成功 |
| message  | string | 提示 |
| data | object | 查询返回数组 |





## pagingQuery

### 1. 接口描述

接口功能：更新文档

接口声明：`pagingQuery(collection: string,param:Object,page:number,count:number,sort:Object) Promise<Object>`

### 2. 输入参数

|  参数  | 类型  |必填  |说明  |
| :----: |:----: | :----: | :----: |
| collection  | string |是 |集合名称 |
| param | object | 是 |{_id: '10001',_openid:'{openid}'}|
| page |number | 是 |页码|
| count | number  | 是 |  返回数量（每次返回不超过20条）|
| sort | object  | 是 | 降序:['status','asc'] 升序:['status','desc'] |

### 3. 输出参数
|  字段 | 类型    |说明  |
| :----: |:----:  | :----: |
| code  | number | 0:失败; 1成功 |
| message  | string | 提示 |
| data | object | 查询返回数组 |






## includeCollectionCount

### 1. 接口描述

接口功能：更新文档

接口声明：`includeCollectionCount(collection: string,param:Object) Promise<Object>`

### 2. 输入参数

|  参数  | 类型  |必填  |说明  |
| :----: |:----: | :----: | :----: |
| collection  | string |是 |集合名称 |
| param | object | 是 |{_id: '10001',_openid:'{openid}'}|

### 3. 输出参数
|  字段 | 类型    |说明  |
| :----: |:----:  | :----: |
| code  | number | 0:失败; 1成功 |
| message  | string | 提示 |
| total | object | 计数结果|