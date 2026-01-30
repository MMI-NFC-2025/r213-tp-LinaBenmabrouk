/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3384004117")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "autodate2413224187",
    "name": "create",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3384004117")

  // remove field
  collection.fields.removeById("autodate2413224187")

  // remove field
  collection.fields.removeById("autodate1542800728")

  return app.save(collection)
})
