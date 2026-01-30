/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3384004117")

  // update field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "autodate1542800728",
    "name": "updated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3384004117")

  // update field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "autodate1542800728",
    "name": "field",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
})
