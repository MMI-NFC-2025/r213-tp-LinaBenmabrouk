/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3384004117")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file3760176746",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "images",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3384004117")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file3760176746",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "images",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
