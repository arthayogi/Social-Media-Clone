export default function tes() {
  return (
    <>
      <TouchableOpacity>
        <Button
          icon="camera"
          mode="contained"
          textColor="#FFEDD3"
          style={[styles.imageButton4, instruction.imgUrl && styles.disabledButton]}
          onPress={() =>
            pickImage((uri) => {
              const newInstructions = [...instructions];
              newInstructions[index].imgUrl = uri;
              setInstructions(newInstructions);
            })
          }
          disabled={!!instruction.imgUrl}
        >
          <Text style={styles.buttonText}>Photo</Text>
        </Button>
      </TouchableOpacity>
    </>
  );
}

<Button
icon="upload"
mode="contained"
textColor="#FFEDD3"
style={[styles.imageButton1, imgUrl && styles.disabledButton]}
onPress={() => pickImage(setImgUrl)}
disabled={!!imgUrl}
/>


style={[
                    styles.imageButton,
                    instruction.imgUrl && styles.disabledButton,
                  ]}
                  onPress={() =>
                    pickImage((uri) => {
                      const newInstructions = [...instructions];
                      newInstructions[index].imgUrl = uri;
                      setInstructions(newInstructions);
                    })
                  }
                  disabled={!!instruction.imgUrl}