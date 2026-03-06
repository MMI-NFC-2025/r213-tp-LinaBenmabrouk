/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3989643894")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3384004117",
    "hidden": false,
    "id": "relation3333174596",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "offres",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3989643894")

  // remove field
  collection.fields.removeById("relation3333174596")

  return app.save(collection)
})
