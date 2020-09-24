function showDescription() {
  var name = echlang.utils.getDefaultMessage({
    defaultMessage: "小明",
    id: "js.lang.massage.1",
  });
  var job = echlang.utils.getDefaultMessage({
    defaultMessage: "男孩",
    id: "js.lang.massage.2",
  });
  var description = echlang.utils.getDefaultMessage({
    defaultMessage: `${name}是${job}`,
    id: "js.lang.massage.3",
    values: [name, job],
  });
  document.getElementById("description").innerHTML = description;
}
