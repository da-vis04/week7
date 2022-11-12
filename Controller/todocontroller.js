
const { List } = require("../model/ToDo");
const {v4: uuid} = require("uuid");
const toli = require ("../Controller/todocontroller")
//get all ToDo list
exports.GetAll = async (req, res) => {
    try {
      const ToDo = ToDo;
      res.status(200).json({
        message: "All ToDo List",
        ToDo: ToDo
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  //get single ToDO list
  exports.getList = async (req, res) =>{
    try {
        let id = req.params.id;
        const ToDO = ToDO.find((ToDO) => ToDO.id ==id);
        res.status(200).json({
            message: "List Found",
            ToDO,
        });
    } catch (error) {
        
    }
}
//Create List

exports.CreateList = async (req, res) => {
    try {
      const ToDO = await req.body;
      ToDO.id = uuid();
      List.push(ToDO);
      
      res.status(201).json({
        message: "List Created",
        ToDO,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
  //Update Flight

exports.UpdateList = async (res, req) =>{
    try {
        let id = req.params.id;
        const ToDO = List.find((ToDO) => ToDO.id === id);
        const {Title, Date, Price, Time} = await req.body;
        ToDO.Title = Title;
        ToDO.Date = Date;
        ToDO.Time = Time;
        ToDO.Price = Price;
        res.status(200).json({
            message: "List Updated",
            ToDO,
    });
    } catch (error) {
        res.status(500).json({message: error});
    }
}

//Delete List
exports.deleteList = async (req, res) =>{
    try {
        let id = req.params.id;
        const ToDO = List.find((ToDO) => ToDO.id ===id);
        List.splice(List.indexOf(ToDO),1);
        res.status(200).json({
            message:"List deleted",
            ToDO,
        });
    } catch (error) {
        ResizeObserverSize.status(500).json({message:error})
    }
}



  