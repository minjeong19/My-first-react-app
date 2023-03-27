function ExInline() {
  const helloStr = "Hello, first exercise";
  // const styleObj = {};
  return (
    <div
      style={{ marginTop: "32px", backgroundColor: "skyblue" }}
      onClick={() => {
        alert("클릭됨");
      }}
    >
      {helloStr}
    </div>
  );
}

export default ExInline;
