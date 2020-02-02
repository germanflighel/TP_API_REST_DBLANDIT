# DBLandIT Course Manager
Sample course manager for DBLandIT.  Developed using Node JS & Expresss. No Auth required.

## Version: 1.0.0

**Contact information:**  
flighelmang@gmail.com  

**License:** [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

[Find out more about Swagger](http://swagger.io)
### Security
**api_key**  

|apiKey|*API Key*|
|---|---|
|Name|api_key|
|In|header|

### /courses

#### POST
##### Summary:

Add a new course to database

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | Course object that will be added | Yes | [Course](#course) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 400 | Invalid input |

#### GET
##### Summary:

Finds courses, filtering by year and/or duration

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| duration | query | Duration to be filtered by | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Courses |

### /courses/{courseId}

#### DELETE
##### Summary:

Delete a course by ID

##### Description:

For valid response try integer _id. Non-valid values will generate API errors

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| courseId | path | ID of course to that needs to be deleted | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Course was deleted |
| 400 | Invalid ID supplied |

### /courses/{courseId}/students

#### GET
##### Summary:

Get Students of a given course

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| courseId | path | ID of course to that needs to be deleted | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | successful operation | [ object ] |
| 400 | Invalid id value |  |

### /courses/{courseId}/student

#### POST
##### Summary:

Adds a student to the course

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| courseId | path | ID of course to add the Student | Yes | string |
| body | body | Student object that will be added | Yes | object |

##### Responses

| Code | Description |
| ---- | ----------- |
| 400 | Non-existing course or student already in course |

### /courses/{courseId}/students/top

#### GET
##### Summary:

Gets the student with the top grade in a given course

##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| courseId | path | ID of course to get the top Student | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 400 | Non-existing course or student already in course |

### Models


#### Course

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| year | long |  | No |
| duration | long | Duration in hours | No |
| subject | string | Subject given in course | No |
| students | [ object ] | May not be provided | No |

#### Student

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| DNI | long |  | No |
| name | string |  | No |
| surname | string |  | No |
| address | string |  | No |

#### ApiResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | integer |  | No |
| type | string |  | No |
| message | string |  | No |